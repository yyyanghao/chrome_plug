
    function findWeather() {
        citytq = "合肥";
        var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq;
        
        
        $.ajax({
          url: url,
          dataType: "script",
          scriptCharset: "gbk",
          success: function (data) {
          	console.log(data)
            var _w = window.SWther.w[citytq][0];
            console.log(window.SWther.w[citytq][0]);
            var _f = _w.f1 + "_0.png";
            if (new Date().getHours() > 17) {
              _f = _w.f2 + "_1.png";
            }
            var img = "<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" + _f
        + "' />";
            var tq =  citytq + " " + img + " " + _w.s1 + "<br />" + _w.t1 + "℃～" + _w.t2 + "℃ " +'<br />'+ _w.d1 + _w.p1 + "级";
            $('#weather').html(tq);
          }
        });
    }
    findWeather()