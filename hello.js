var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World (in Node.js!)</h1><br/><br/><pre style="color:#000000;background:#ffffff;"><html><body style="color:#000000; background:#ffffff; "><pre> <span style="color:#800000; font-weight:bold; ">var</span> http <span style="color:#808030; ">=</span> require<span style="color:#808030; ">(</span><span style="color:#0000e6; ">"http"</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> http<span style="color:#808030; ">.</span>createServer<span style="color:#808030; ">(</span><span style="color:#800000; font-weight:bold; ">function</span> <span style="color:#808030; ">(</span>req<span style="color:#808030; ">,</span> res<span style="color:#808030; ">)</span> <span style="color:#800080; ">{</span> res<span style="color:#808030; ">.</span>writeHead<span style="color:#808030; ">(</span><span style="color:#008c00; ">200</span><span style="color:#808030; ">,</span> <span style="color:#800080; ">{</span> <span style="color:#0000e6; ">"Content-Type"</span><span style="color:#800080; ">:</span> <span style="color:#0000e6; ">"text/html"</span> <span style="color:#800080; ">}</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> res<span style="color:#808030; ">.</span>end<span style="color:#808030; ">(</span><span style="color:#0000e6; ">"&lt;h1>Hello World (in Node.js!)&lt;/h1>"</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> <span style="color:#800080; ">}</span><span style="color:#808030; ">)</span><span style="color:#808030; ">.</span>listen<span style="color:#808030; ">(</span>process<span style="color:#808030; ">.</span>env<span style="color:#808030; ">.</span>PORT<span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> </pre>');
	
    
}).listen(process.env.PORT);



