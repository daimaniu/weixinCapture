var http = require('http');
var phantom = require('node-phantom-simple');


http.createServer(function (req, res) {
    phantom.create(function (err, ph) {
        return ph.createPage(function (err, page) {
            page.onConsoleMessage = function (msg) {
                console.log(msg);
            };

            return page.open(req.url.slice(1), function (err, status) {
                page.includeJs("http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js", function () {
                    console.log(status);
                    page.evaluate(function () {
                        console.log('start image lazy loading');
                        var $imgs = $('img');
                        var size = 0;
                        $imgs.each(function () {
                            var src = $(this).attr("src");
                            var data_src = $(this).attr("data-src")
                            if (data_src) {
                                $(this).attr("src", $(this).attr("data-src"));
                                size++;
                            }
                        });
                        return size;
                    }, function (error, result) {
                        setTimeout(function () {
                            page.renderBase64("PNG", function (error, result) {
                                var imageBuffer = new Buffer(result, 'base64');
                                res.writeHead(200, {
                                    'Content-Type': 'image/png',
                                    'Content-Length': imageBuffer.length
                                });
                                res.end(imageBuffer);
                                ph.exit()
                            });
                        }, 5000);
                    });
                });
            });
        });
    });
}).listen(1337, '127.0.0.1');

console.log('Server running at port 1337');
