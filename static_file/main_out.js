(function(window_, jQuery) {

	var G = window_.location.protocol,
    Ta = "https:" == G;
    if ("agar.io" != window_.location.hostname && "localhost" != window_.location.hostname && "10.10.2.13" != window_.location.hostname)
    {
    	 window_.location = G + "//agar.io/";
    }
    else if (window_.top != window_)
    {
    	window_.top.location = G + "//agar.io/";
    }
    else {
    	var canvas2;		//ok
        var canvas;			//ok
        var ctx;			//ok
        var options = "ontouchstart" in window_ && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);//ok
        var mouseX = 0;
        var mouseY = 0;

        var  n, r, L = null,
        m = null,
        s = 0,
        t = 0,
        E = [],
        h = [],
        y = {},
        q = [],
        H = [],
        z = [],
        X = -1,
        Y = -1,
        $a = 0,
        F = 0,
        D = null,
        ca = 0,
        da = 0,
        ea = 1E4,
        fa = 1E4,
        l = 1,
        u = null,
        Na = !0,
        ja = !0,
        wa = !1,
        sa = !1,
        I = 0,
        ga = !1,
        Oa = !1,
        P = s = ~~ ((ca + ea) / 2),
        Q = t = ~~ ((da + fa) / 2),
        R = 1,
        M = "",
        w = null,
        ka = !1,
        ra = !1,
        pa = 0,
        qa = 0,
        aa = 0,
        ba = 0,
        Pa = 0,
        cb = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
        ua = !1,
        C = 1,
        va = new Image;
        va.src = "img/split.png";
        var Qa = document.createElement("canvas");
        if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == Qa || null == Qa.getContext || null == window_.localStorage) alert("You browser does not support this game, we recommend you to use Firefox to play this");
        else {
            var old = null;		//ok
            window_.setNick = function(a) {
                Fa();
                D = a;
                Ha();
                I = 0
            };
            window_.setRegion = V;
            window_.setSkins = function(a) {
                Na = a
            };
            window_.setNames = function(a) {
                ja = a
            };
            window_.setDarkTheme = function(a) {
                ga = a
            };
            window_.setColors = function(a) {
                wa = a
            };
            window_.setShowMass = function(a) {
                Oa = a
            };
            window_.spectate = function() {
                D = null;
                emit(1);
                Fa()
            };
            window_.setGameMode = function(a) {
                a != M && (M = a, W())
            };
            window_.setAcid = function(a) {
                ua = a
            };
            null != window_.localStorage && (null == window_.localStorage.AB8 
            	&& (window_.localStorage.AB8 = 0 + ~~ (100 * Math.random())), Pa = +window_.localStorage.AB8, window_.ABGroup = Pa);
            jQuery.get(G + "//gc.agar.io",
            function(a) {
                var b = a.split(" ");
                a = b[0];
                b = b[1] || ""; - 1 == "DE IL PL HU BR AT UA".split(" ").indexOf(a) && xa.push("nazi"); - 1 == ["UA"].indexOf(a) && xa.push("ussr");
                S.hasOwnProperty(a) && ("string" == typeof S[a] ? u || V(S[a]) : S[a].hasOwnProperty(b) && (u || V(S[a][b])))
            },
            "text");
            setTimeout(function() {},
            3E5);
            var S = {
                AF: "JP-Tokyo",
                AX: "EU-London",
                AL: "EU-London",
                DZ: "EU-London",
                AS: "SG-Singapore",
                AD: "EU-London",
                AO: "EU-London",
                AI: "US-Atlanta",
                AG: "US-Atlanta",
                AR: "BR-Brazil",
                AM: "JP-Tokyo",
                AW: "US-Atlanta",
                AU: "SG-Singapore",
                AT: "EU-London",
                AZ: "JP-Tokyo",
                BS: "US-Atlanta",
                BH: "JP-Tokyo",
                BD: "JP-Tokyo",
                BB: "US-Atlanta",
                BY: "EU-London",
                BE: "EU-London",
                BZ: "US-Atlanta",
                BJ: "EU-London",
                BM: "US-Atlanta",
                BT: "JP-Tokyo",
                BO: "BR-Brazil",
                BQ: "US-Atlanta",
                BA: "EU-London",
                BW: "EU-London",
                BR: "BR-Brazil",
                IO: "JP-Tokyo",
                VG: "US-Atlanta",
                BN: "JP-Tokyo",
                BG: "EU-London",
                BF: "EU-London",
                BI: "EU-London",
                KH: "JP-Tokyo",
                CM: "EU-London",
                CA: "US-Atlanta",
                CV: "EU-London",
                KY: "US-Atlanta",
                CF: "EU-London",
                TD: "EU-London",
                CL: "BR-Brazil",
                CN: "CN-China",
                CX: "JP-Tokyo",
                CC: "JP-Tokyo",
                CO: "BR-Brazil",
                KM: "EU-London",
                CD: "EU-London",
                CG: "EU-London",
                CK: "SG-Singapore",
                CR: "US-Atlanta",
                CI: "EU-London",
                HR: "EU-London",
                CU: "US-Atlanta",
                CW: "US-Atlanta",
                CY: "JP-Tokyo",
                CZ: "EU-London",
                DK: "EU-London",
                DJ: "EU-London",
                DM: "US-Atlanta",
                DO: "US-Atlanta",
                EC: "BR-Brazil",
                EG: "EU-London",
                SV: "US-Atlanta",
                GQ: "EU-London",
                ER: "EU-London",
                EE: "EU-London",
                ET: "EU-London",
                FO: "EU-London",
                FK: "BR-Brazil",
                FJ: "SG-Singapore",
                FI: "EU-London",
                FR: "EU-London",
                GF: "BR-Brazil",
                PF: "SG-Singapore",
                GA: "EU-London",
                GM: "EU-London",
                GE: "JP-Tokyo",
                DE: "EU-London",
                GH: "EU-London",
                GI: "EU-London",
                GR: "EU-London",
                GL: "US-Atlanta",
                GD: "US-Atlanta",
                GP: "US-Atlanta",
                GU: "SG-Singapore",
                GT: "US-Atlanta",
                GG: "EU-London",
                GN: "EU-London",
                GW: "EU-London",
                GY: "BR-Brazil",
                HT: "US-Atlanta",
                VA: "EU-London",
                HN: "US-Atlanta",
                HK: "JP-Tokyo",
                HU: "EU-London",
                IS: "EU-London",
                IN: "JP-Tokyo",
                ID: "JP-Tokyo",
                IR: "JP-Tokyo",
                IQ: "JP-Tokyo",
                IE: "EU-London",
                IM: "EU-London",
                IL: "JP-Tokyo",
                IT: "EU-London",
                JM: "US-Atlanta",
                JP: "JP-Tokyo",
                JE: "EU-London",
                JO: "JP-Tokyo",
                KZ: "JP-Tokyo",
                KE: "EU-London",
                KI: "SG-Singapore",
                KP: "JP-Tokyo",
                KR: "JP-Tokyo",
                KW: "JP-Tokyo",
                KG: "JP-Tokyo",
                LA: "JP-Tokyo",
                LV: "EU-London",
                LB: "JP-Tokyo",
                LS: "EU-London",
                LR: "EU-London",
                LY: "EU-London",
                LI: "EU-London",
                LT: "EU-London",
                LU: "EU-London",
                MO: "JP-Tokyo",
                MK: "EU-London",
                MG: "EU-London",
                MW: "EU-London",
                MY: "JP-Tokyo",
                MV: "JP-Tokyo",
                ML: "EU-London",
                MT: "EU-London",
                MH: "SG-Singapore",
                MQ: "US-Atlanta",
                MR: "EU-London",
                MU: "EU-London",
                YT: "EU-London",
                MX: "US-Atlanta",
                FM: "SG-Singapore",
                MD: "EU-London",
                MC: "EU-London",
                MN: "JP-Tokyo",
                ME: "EU-London",
                MS: "US-Atlanta",
                MA: "EU-London",
                MZ: "EU-London",
                MM: "JP-Tokyo",
                NA: "EU-London",
                NR: "SG-Singapore",
                NP: "JP-Tokyo",
                NL: "EU-London",
                NC: "SG-Singapore",
                NZ: "SG-Singapore",
                NI: "US-Atlanta",
                NE: "EU-London",
                NG: "EU-London",
                NU: "SG-Singapore",
                NF: "SG-Singapore",
                MP: "SG-Singapore",
                NO: "EU-London",
                OM: "JP-Tokyo",
                PK: "JP-Tokyo",
                PW: "SG-Singapore",
                PS: "JP-Tokyo",
                PA: "US-Atlanta",
                PG: "SG-Singapore",
                PY: "BR-Brazil",
                PE: "BR-Brazil",
                PH: "JP-Tokyo",
                PN: "SG-Singapore",
                PL: "EU-London",
                PT: "EU-London",
                PR: "US-Atlanta",
                QA: "JP-Tokyo",
                RE: "EU-London",
                RO: "EU-London",
                RU: "RU-Russia",
                RW: "EU-London",
                BL: "US-Atlanta",
                SH: "EU-London",
                KN: "US-Atlanta",
                LC: "US-Atlanta",
                MF: "US-Atlanta",
                PM: "US-Atlanta",
                VC: "US-Atlanta",
                WS: "SG-Singapore",
                SM: "EU-London",
                ST: "EU-London",
                SA: "EU-London",
                SN: "EU-London",
                RS: "EU-London",
                SC: "EU-London",
                SL: "EU-London",
                SG: "JP-Tokyo",
                SX: "US-Atlanta",
                SK: "EU-London",
                SI: "EU-London",
                SB: "SG-Singapore",
                SO: "EU-London",
                ZA: "EU-London",
                SS: "EU-London",
                ES: "EU-London",
                LK: "JP-Tokyo",
                SD: "EU-London",
                SR: "BR-Brazil",
                SJ: "EU-London",
                SZ: "EU-London",
                SE: "EU-London",
                CH: "EU-London",
                SY: "EU-London",
                TW: "JP-Tokyo",
                TJ: "JP-Tokyo",
                TZ: "EU-London",
                TH: "JP-Tokyo",
                TL: "JP-Tokyo",
                TG: "EU-London",
                TK: "SG-Singapore",
                TO: "SG-Singapore",
                TT: "US-Atlanta",
                TN: "EU-London",
                TR: "TK-Turkey",
                TM: "JP-Tokyo",
                TC: "US-Atlanta",
                TV: "SG-Singapore",
                UG: "EU-London",
                UA: "EU-London",
                AE: "EU-London",
                GB: "EU-London",
                US: {
                    AL: "US-Atlanta",
                    AK: "US-Fremont",
                    AZ: "US-Fremont",
                    AR: "US-Atlanta",
                    CA: "US-Fremont",
                    CO: "US-Fremont",
                    CT: "US-Atlanta",
                    DE: "US-Atlanta",
                    FL: "US-Atlanta",
                    GA: "US-Atlanta",
                    HI: "US-Fremont",
                    ID: "US-Fremont",
                    IL: "US-Atlanta",
                    IN: "US-Atlanta",
                    IA: "US-Atlanta",
                    KS: "US-Atlanta",
                    KY: "US-Atlanta",
                    LA: "US-Atlanta",
                    ME: "US-Atlanta",
                    MD: "US-Atlanta",
                    MA: "US-Atlanta",
                    MI: "US-Atlanta",
                    MN: "US-Fremont",
                    MS: "US-Atlanta",
                    MO: "US-Atlanta",
                    MT: "US-Fremont",
                    NE: "US-Fremont",
                    NV: "US-Fremont",
                    NH: "US-Atlanta",
                    NJ: "US-Atlanta",
                    NM: "US-Fremont",
                    NY: "US-Atlanta",
                    NC: "US-Atlanta",
                    ND: "US-Fremont",
                    OH: "US-Atlanta",
                    OK: "US-Atlanta",
                    OR: "US-Fremont",
                    PA: "US-Atlanta",
                    RI: "US-Atlanta",
                    SC: "US-Atlanta",
                    SD: "US-Fremont",
                    TN: "US-Atlanta",
                    TX: "US-Atlanta",
                    UT: "US-Fremont",
                    VT: "US-Atlanta",
                    VA: "US-Atlanta",
                    WA: "US-Fremont",
                    WV: "US-Atlanta",
                    WI: "US-Atlanta",
                    WY: "US-Fremont",
                    DC: "US-Atlanta",
                    AS: "US-Atlanta",
                    GU: "US-Atlanta",
                    MP: "US-Atlanta",
                    PR: "US-Atlanta",
                    UM: "US-Atlanta",
                    VI: "US-Atlanta"
                },
                UM: "SG-Singapore",
                VI: "US-Atlanta",
                UY: "BR-Brazil",
                UZ: "JP-Tokyo",
                VU: "SG-Singapore",
                VE: "BR-Brazil",
                VN: "JP-Tokyo",
                WF: "SG-Singapore",
                EH: "EU-London",
                YE: "JP-Tokyo",
                ZM: "EU-London",
                ZW: "EU-London"
            };
            window_.connect = Ga;
            var $ = 500,
            Ka = -1,
            La = -1,
            v = null,
            x = 1,
            ha = null,
            J = {},
            xa = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;hitler;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal".split(";"),
            db = ["8", "nasa"],
            eb = ["m'blob"];
            Ja.prototype = {
                id: 0,
                points: null,
                pointsAcc: null,
                name: null,
                nameCache: null,
                sizeCache: null,
                x: 0,
                y: 0,
                size: 0,
                ox: 0,
                oy: 0,
                oSize: 0,
                nx: 0,
                ny: 0,
                nSize: 0,
                updateTime: 0,
                updateCode: 0,
                drawTime: 0,
                destroyed: !1,
                isVirus: !1,
                isAgitated: !1,
                wasSimpleDrawing: !0,
                destroy: function() {
                    var a;
                    for (a = 0; a < q.length; a++) if (q[a] == this) {
                        q.splice(a, 1);
                        break
                    }
                    delete y[this.id];
                    a = h.indexOf(this); - 1 != a && (sa = !0, h.splice(a, 1));
                    a = E.indexOf(this.id); - 1 != a && E.splice(a, 1);
                    this.destroyed = !0;
                    H.push(this)
                },
                getNameSize: function() {
                    return Math.max(~~ (.3 * this.size), 24)
                },
                setName: function(a) {
                    if (this.name = a) null == this.nameCache ? this.nameCache = new ia(this.getNameSize(), "#FFFFFF", !0, "#000000") : this.nameCache.setSize(this.getNameSize()),
                    this.nameCache.setValue(this.name)
                },
                createPoints: function() {
                    for (var a = this.getNumPoints(); this.points.length > a;) {
                        var b = ~~ (Math.random() * this.points.length);
                        this.points.splice(b, 1);
                        this.pointsAcc.splice(b, 1)
                    }
                    0 == this.points.length && 0 < a && (this.points.push({
                        c: this,
                        v: this.size,
                        x: this.x,
                        y: this.y
                    }), this.pointsAcc.push(Math.random() - .5));
                    for (; this.points.length < a;) {
                        var b = ~~ (Math.random() * this.points.length),
                        c = this.points[b];
                        this.points.splice(b, 0, {
                            c: this,
                            v: c.v,
                            x: c.x,
                            y: c.y
                        });
                        this.pointsAcc.splice(b, 0, this.pointsAcc[b])
                    }
                },
                getNumPoints: function() {
                    var a = 10;
                    20 > this.size && (a = 0);
                    this.isVirus && (a = 30);
                    var b = this.size;
                    this.isVirus || (b *= l);
                    b *= x;
                    return~~Math.max(b, a)
                },
                movePoints: function() {
                    this.createPoints();
                    for (var a = this.points,
                    b = this.pointsAcc,
                    c = a.length,
                    d = 0; d < c; ++d) {
                        var e = b[(d - 1 + c) % c],
                        f = b[(d + 1) % c];
                        b[d] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
                        b[d] *= .7;
                        10 < b[d] && (b[d] = 10); - 10 > b[d] && (b[d] = -10);
                        b[d] = (e + f + 8 * b[d]) / 10
                    }
                    for (var l = this,
                    g = this.isVirus ? 0 : (this.id / 1E3 + F / 1E4) % (2 * Math.PI), d = 0; d < c; ++d) {
                        var h = a[d].v,
                        e = a[(d - 1 + c) % c].v,
                        f = a[(d + 1) % c].v;
                        if (15 < this.size && null != L) {
                            var m = !1,
                            n = a[d].x,
                            k = a[d].y;
                            L.retrieve2(n - 5, k - 5, 10, 10,
                            function(a) {
                                a.c != l && 25 > (n - a.x) * (n - a.x) + (k - a.y) * (k - a.y) && (m = !0)
                            }); ! m && (a[d].x < ca || a[d].y < da || a[d].x > ea || a[d].y > fa) && (m = !0);
                            m && (0 < b[d] && (b[d] = 0), b[d] -= 1)
                        }
                        h += b[d];
                        0 > h && (h = 0);
                        h = this.isAgitated ? (19 * h + this.size) / 20 : (12 * h + this.size) / 13;
                        a[d].v = (e + f + 8 * h) / 10;
                        e = 2 * Math.PI / c;
                        f = this.points[d].v;
                        this.isVirus && 0 == d % 2 && (f += 5);
                        a[d].x = this.x + Math.cos(e * d + g) * f;
                        a[d].y = this.y + Math.sin(e * d + g) * f
                    }
                },
                updatePos: function() {
                    var a;
                    a = (F - this.updateTime) / 120;
                    a = 0 > a ? 0 : 1 < a ? 1 : a;
                    var b = 0 > a ? 0 : 1 < a ? 1 : a;
                    this.getNameSize();
                    if (this.destroyed && 1 <= b) {
                        var c = H.indexOf(this); - 1 != c && H.splice(c, 1)
                    }
                    this.x = a * (this.nx - this.ox) + this.ox;
                    this.y = a * (this.ny - this.oy) + this.oy;
                    this.size = b * (this.nSize - this.oSize) + this.oSize;
                    return b
                },
                shouldRender: function() {
                    return this.x + this.size + 40 < s - n / 2 / l || this.y + this.size + 40 < t - r / 2 / l || this.x - this.size - 40 > s + n / 2 / l || this.y - this.size - 40 > t + r / 2 / l ? !1 : !0
                },
                draw: function() {
                    if (this.shouldRender()) {
                        var a = !this.isVirus && !this.isAgitated && .1 > l;
                        5 > this.getNumPoints() && (a = !0);
                        if (this.wasSimpleDrawing && !a) for (var b = 0; b < this.points.length; b++) this.points[b].v = this.size;
                        this.wasSimpleDrawing = a;
                        ctx.save();
                        this.drawTime = F;
                        b = this.updatePos();
                        this.destroyed && (ctx.globalAlpha *= 1 - b);
                        ctx.lineWidth = 10;
                        ctx.lineCap = "round";
                        ctx.lineJoin = this.isVirus ? "mitter": "round";
                        wa ? (ctx.fillStyle = "#FFFFFF", ctx.strokeStyle = "#AAAAAA") : (ctx.fillStyle = this.color, ctx.strokeStyle = this.color);
                        if (a) ctx.beginPath(),
                        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1);
                        else {
                            this.movePoints();
                            ctx.beginPath();
                            var c = this.getNumPoints();
                            ctx.moveTo(this.points[0].x, this.points[0].y);
                            for (b = 1; b <= c; ++b) {
                                var d = b % c;
                                ctx.lineTo(this.points[d].x, this.points[d].y)
                            }
                        }
                        ctx.closePath();
                        c = this.name.toLowerCase(); ! this.isAgitated && Na && "" == M ? -1 != xa.indexOf(c) ? (J.hasOwnProperty(c) || (J[c] = new Image, J[c].src = "skins/" + c + ".png"), b = 0 != J[c].width && J[c].complete ? J[c] : null) : b = null: b = null;
                        b = (d = b) ? -1 != eb.indexOf(c) : !1;
                        a || ctx.stroke();
                        ctx.fill();
                        null == d || b || (ctx.save(), ctx.clip(), ctx.drawImage(d, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size), ctx.restore()); (wa || 15 < this.size) && !a && (ctx.strokeStyle = "#000000", ctx.globalAlpha *= .1, ctx.stroke());
                        ctx.globalAlpha = 1;
                        null != d && b && ctx.drawImage(d, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
                        b = -1 != h.indexOf(this);
                        a = ~~this.y;
                        if ((ja || b) && this.name && this.nameCache && (null == d || -1 == db.indexOf(c))) {
                            d = this.nameCache;
                            d.setValue(this.name);
                            d.setSize(this.getNameSize());
                            c = Math.ceil(10 * l) / 10;
                            d.setScale(c);
                            var d = d.render(),
                            f = ~~ (d.width / c),
                            g = ~~ (d.height / c);
                            ctx.drawImage(d, ~~this.x - ~~ (f / 2), a - ~~ (g / 2), f, g);
                            a += d.height / 2 / c + 4
                        }
                        Oa && (b || 0 == h.length && (!this.isVirus || this.isAgitated) && 20 < this.size) && (null == this.sizeCache && (this.sizeCache = new ia(this.getNameSize() / 2, "#FFFFFF", !0, "#000000")), b = this.sizeCache, b.setSize(this.getNameSize() / 2), b.setValue(~~ (this.size * this.size / 100)), c = Math.ceil(10 * l) / 10, b.setScale(c), d = b.render(), f = ~~ (d.width / c), g = ~~ (d.height / c), ctx.drawImage(d, ~~this.x - ~~ (f / 2), a - ~~ (g / 2), f, g));
                        ctx.restore()
                    }
                }
            };
            ia.prototype = {
                _value: "",
                _color: "#000000",
                _stroke: !1,
                _strokeColor: "#000000",
                _size: 16,
                _canvas: null,
                _ctx: null,
                _dirty: !1,
                _scale: 1,
                setSize: function(a) {
                    this._size != a && (this._size = a, this._dirty = !0)
                },
                setScale: function(a) {
                    this._scale != a && (this._scale = a, this._dirty = !0)
                },
                setColor: function(a) {
                    this._color != a && (this._color = a, this._dirty = !0)
                },
                setStroke: function(a) {
                    this._stroke != a && (this._stroke = a, this._dirty = !0)
                },
                setStrokeColor: function(a) {
                    this._strokeColor != a && (this._strokeColor = a, this._dirty = !0)
                },
                setValue: function(a) {
                    a != this._value && (this._value = a, this._dirty = !0)
                },
                render: function() {
                    null == this._canvas && (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"));
                    if (this._dirty) {
                        this._dirty = !1;
                        var a = this._canvas,
                        b = this._ctx,
                        c = this._value,
                        d = this._scale,
                        ctx = this._size,
                        f = ctx + "px Ubuntu";
                        b.font = f;
                        var g = b.measureText(c).width,
                        h = ~~ (.2 * ctx);
                        a.width = (g + 6) * d;
                        a.height = (ctx + h) * d;
                        b.font = f;
                        b.scale(d, d);
                        b.globalAlpha = 1;
                        b.lineWidth = 3;
                        b.strokeStyle = this._strokeColor;
                        b.fillStyle = this._color;
                        this._stroke && b.strokeText(c, 3, ctx - h / 2);
                        b.fillText(c, 3, ctx - h / 2)
                    }
                    return this._canvas
                }
            };
            window_.onload = init
        }
    }





	///----------------------------------------------------------------------------------------------------
    function init() {							//初始化入口
        ka = true;								//未知的变量 默认是true
        render();
        console.log('hello world');
        setInterval(render, 18E4);
        canvas = canvas2 = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        canvas.onmousedown = function(e) {		
            if (options) {
                var z0 = e.clientX - (5 + width / 5 / 2);
                var z1 = e.clientY - (5 + width / 5 / 2);
                if (Math.sqrt(z0 * z0 + z1 * z1) <= width / 5 / 2) {
                    sendMousePosition();
                    emit(17);
                    return
                }
            }
            mouseX = e.clientX;
            mouseY = e.clientY;
            reset();
            sendMousePosition()
        };
        canvas.onmousemove = function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            reset();
        };
        canvas.onmouseup = function(a) {};

        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", mouseScroll, false) : document.body.onmousewheel = mouseScroll;
       	
        var keySpace = false;
        var keyQ = false;
        var keyW = false;
        window_.onkeydown = function(e) {
        	if (!(32 != e.keyCode)) { // space
                if (!keySpace) {
                    sendMousePosition();
                    emit(17);
                    keySpace = true;
                }
            }
            if (!(81 != e.keyCode)) { // q
                if (!keyQ) {
                    emit(18);
                    keyQ = true;
                }
            }
            if (!(87 != e.keyCode)) { // w
                if (!keyW) {
                    sendMousePosition();
                    emit(21);
                    keyW = true;
                }
            }

            if (!(27 != e.keyCode)) { // esc
                onEsc(true);
            }
        };
        window_.onkeyup = function(event) {
           if (32 == event.keyCode) { // space
                keySpace = false;
            }
            if (87 == event.keyCode) { // w
                keyW = false;
            }
            if (81 == event.keyCode) {// q
                if (keyQ) {
                    emit(19);
                    keyQ = false;
                }
            }
        };
        window_.onblur = function() {
            emit(19);
            keyW = keyQ = keySpace = false;
        };
        window_.onresize = onResize;
        onResize();
        if (window_.requestAnimationFrame) {
            window_.requestAnimationFrame(anim);
        } else {
            setInterval(draw, 1E3 / 60);
        }
        setInterval(sendMousePosition, 40);
        //todo
        u && jQuery("#region").val(u),console.log(u);
        Ea();
        V(jQuery("#region").val());
        null == m && u && W();
        jQuery("#overlays").show()
    }
    function mouseScroll(a) {
        C *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        1 > C && (C = 1);
        C > 4 / l && (C = 4 / l)
    }
    function Sa() {
        if (.1 > l) L = null;
        else {
            for (var a = Number.POSITIVE_INFINITY,
            b = Number.POSITIVE_INFINITY,
            c = Number.NEGATIVE_INFINITY,
            d = Number.NEGATIVE_INFINITY,
            e = 0,
            p = 0; p < q.length; p++) q[p].shouldRender() && !q[p].wasSimpleDrawing && (e = Math.max(q[p].size, e), a = Math.min(q[p].x, a), b = Math.min(q[p].y, b), c = Math.max(q[p].x, c), d = Math.max(q[p].y, d));
            L = QUAD.init({
                minX: a - (e + 100),
                minY: b - (e + 100),
                maxX: c + (e + 100),
                maxY: d + (e + 100)
            });
            for (p = 0; p < q.length; p++) if (a = q[p], a.shouldRender()) for (b = 0; b < a.points.length; ++b) L.insert(a.points[b])
        }
    }
    function reset() {
        X = (mouseX - n / 2) / l + s;
        Y = (mouseY - r / 2) / l + t
    }
    function render() {
       	if (null == old) {//todo 
            old = {};
            jQuery("#region").children().each(function() {
                var option = jQuery(this);
                var name = option.val();
                if (name) {
                    old[name] = option.text();
                }
            });
        }
        var url;
		if(document.location.host == 'localhost' || document.location.host=='agar.io'){
            url = 'http://m.agar.io/info';
        }else{
            url = document.location.href
            url = getProxyUrl()+'?info=1';
        }
        jQuery.get(url, function(b) {
            var name;
            for (name in b.regions) {
                jQuery('#region option[value="' + name + '"]').text(old[name] + " (" + b.regions[name].numPlayers + " players)");
            }
        }, "json");
    }
    function Fa() {
        jQuery("#adsBottom").hide();
        jQuery("#overlays").hide();
        Ea()
    }
    function V(a) {
        a && a != u && (jQuery("#region").val() != a && jQuery("#region").val(a), u = window_.localStorage.location = a, jQuery(".region-message").hide(), jQuery(".region-message." + a).show(), jQuery(".btn-needs-server").prop("disabled", !1), ka && W())
    }
    function onEsc(a) {
        D = null;
        jQuery("#overlays").fadeIn(a ? 200 : 3E3);
        a || jQuery("#adsBottom").fadeIn(3E3)
    }
    function Ea() {
        jQuery("#region").val() ? window_.localStorage.location = jQuery("#region").val() : window_.localStorage.location && jQuery("#region").val(window_.localStorage.location);
        jQuery("#region").val() ? jQuery("#locationKnown").append(jQuery("#region")) : jQuery("#locationUnknown").append(jQuery("#region"))
    }
    function oa() {
        console.log("Find " + u + M);
        /*
        Ga("ws://45.79.222.79:443");
       
        //todo
        */
        jQuery.ajax(G + "//m.agar.io/", {
            error: function() {
                setTimeout(oa, 1E3)
            },
            success: function(a) {
                a = a.split("\n");
                "45.79.222.79:443" == a[0] ? oa() : Ga("ws://" + a[0])
            },
            dataType: "text",
            method: "POST",
            cache: !1,
            crossDomain: !0,
            data: u + M || "?"
        })
    }
    function W() {
        ka && u && (jQuery("#connecting").show(), oa())
    }
    function Ga(a) {
        if (m) {
            m.onopen = null;
            m.onmessage = null;
            m.onclose = null;
            try {
                m.close()
            } catch(b) {}
            m = null
        }
        var c = window_.location.search.slice(1);
        /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+:[0-9]+$/.test(c) && (a = "ws://" + c);
        Ta && (a = a.split(":"), a = a[0] + "s://ip-" + a[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + ( + a[2] + 2E3));
        E = [];
        h = [];
        y = {};
        q = [];
        H = [];
        z = [];
        v = w = null;
        I = 0;
        console.log("Connecting to " + a);
        m = new WebSocket(a);
        m.binaryType = "arraybuffer";
        m.onopen = Ua;
        m.onmessage = Va;
        m.onclose = Wa;
        m.onerror = function() {
            console.log("socket error")
        }
    }
    function N(a) {
        return new DataView(new ArrayBuffer(a))
    }
    function O(a) {
        m.send(a.buffer)
    }
    function Ua(a) {
        $ = 500;
        jQuery("#connecting").hide();
        console.log("socket open");
        a = N(5);
        a.setUint8(0, 254);
        a.setUint32(1, 4, !0);
        O(a);
        a = N(5);
        a.setUint8(0, 255);
        a.setUint32(1, 673720360, !0);
        O(a);
        Ha()
    }
    function Wa(a) {
        console.log("socket close");
        setTimeout(W, $);
        $ *= 1.5
    }
    function Va(a) {
        Xa(new DataView(a.data))
    }
    function Xa(a) {
        function b() {
            for (var b = "";;) {
                var d = a.getUint16(c, !0);
                c += 2;
                if (0 == d) break;
                b += String.fromCharCode(d)
            }
            return b
        }
        var c = 0;
        240 == a.getUint8(c) && (c += 5);
        switch (a.getUint8(c++)) {
        case 16:
            Ya(a, c);
            break;
        case 17:
            P = a.getFloat32(c, !0);
            c += 4;
            Q = a.getFloat32(c, !0);
            c += 4;
            R = a.getFloat32(c, !0);
            c += 4;
            break;
        case 20:
            h = [];
            E = [];
            break;
        case 21:
            pa = a.getInt16(c, !0);
            c += 2;
            qa = a.getInt16(c, !0);
            c += 2;
            ra || (ra = !0, aa = pa, ba = qa);
            break;
        case 32:
            E.push(a.getUint32(c, !0));
            c += 4;
            break;
        case 49:
            if (null != w) break;
            var d = a.getUint32(c, !0),
            c = c + 4;
            z = [];
            for (var e = 0; e < d; ++e) {
                var p = a.getUint32(c, !0),
                c = c + 4;
                z.push({
                    id: p,
                    name: b()
                })
            }
            Ia();
            break;
        case 50:
            w = [];
            d = a.getUint32(c, !0);
            c += 4;
            for (e = 0; e < d; ++e) w.push(a.getFloat32(c, !0)),
            c += 4;
            Ia();
            break;
        case 64:
            ca = a.getFloat64(c, !0),
            c += 8,
            da = a.getFloat64(c, !0),
            c += 8,
            ea = a.getFloat64(c, !0),
            c += 8,
            fa = a.getFloat64(c, !0),
            c += 8,
            P = (ea + ca) / 2,
            Q = (fa + da) / 2,
            R = 1,
            0 == h.length && (s = P, t = Q, l = R)
        }
    }
    function Ya(a, b) {
        F = +new Date;
        var c = Math.random();
        sa = !1;
        var d = a.getUint16(b, !0);
        b += 2;
        for (var e = 0; e < d; ++e) {
            var p = y[a.getUint32(b, !0)],
            f = y[a.getUint32(b + 4, !0)];
            b += 8;
            p && f && (f.destroy(), f.ox = f.x, f.oy = f.y, f.oSize = f.size, f.nx = p.x, f.ny = p.y, f.nSize = f.size, f.updateTime = F)
        }
        for (e = 0;;) {
            d = a.getUint32(b, !0);
            b += 4;
            if (0 == d) break; ++e;
            var g, p = a.getInt16(b, !0);
            b += 2;
            f = a.getInt16(b, !0);
            b += 2;
            g = a.getInt16(b, !0);
            b += 2;
            for (var l = a.getUint8(b++), n = a.getUint8(b++), q = a.getUint8(b++), l = (l << 16 | n << 8 | q).toString(16); 6 > l.length;) l = "0" + l;
            var l = "#" + l,
            k = a.getUint8(b++),
            n = !!(k & 1),
            q = !!(k & 16);
            k & 2 && (b += 4);
            k & 4 && (b += 8);
            k & 8 && (b += 16);
            for (var m, k = "";;) {
                m = a.getUint16(b, !0);
                b += 2;
                if (0 == m) break;
                k += String.fromCharCode(m)
            }
            m = k;
            k = null;
            y.hasOwnProperty(d) ? (k = y[d], k.updatePos(), k.ox = k.x, k.oy = k.y, k.oSize = k.size, k.color = l) : (k = new Ja(d, p, f, g, l, m), k.pX = p, k.pY = f);
            k.isVirus = n;
            k.isAgitated = q;
            k.nx = p;
            k.ny = f;
            k.nSize = g;
            k.updateCode = c;
            k.updateTime = F;
            m && k.setName(m); - 1 != E.indexOf(d) && -1 == h.indexOf(k) && (document.getElementById("overlays").style.display = "none", h.push(k), 1 == h.length && (s = k.x, t = k.y))
        }
        c = a.getUint32(b, !0);
        b += 4;
        for (e = 0; e < c; e++) d = a.getUint32(b, !0),
        b += 4,
        k = y[d],
        null != k && k.destroy();
        sa && 0 == h.length && onEsc(false)
    }
    function sendMousePosition() {
        var a;
        if (ta()) {
            a = mouseX - n / 2;
            var b = mouseY - r / 2;
            64 > a * a + b * b || .01 > Math.abs(Ka - X) && .01 > Math.abs(La - Y) || (Ka = X, La = Y, a = N(21), a.setUint8(0, 16), a.setFloat64(1, X, !0), a.setFloat64(9, Y, !0), a.setUint32(17, 0, !0), O(a))
        }
    }
    function Ha() {
        if (ta() && null != D) {
            var a = N(1 + 2 * D.length);
            a.setUint8(0, 0);
            for (var b = 0; b < D.length; ++b) a.setUint16(1 + 2 * b, D.charCodeAt(b), !0);
            O(a)
        }
    }
    function ta() {
        return null != m && m.readyState == m.OPEN
    }
    function emit(opt_attributes) {	//发送到后台
        if (ta()) {
            var b = N(1);
            b.setUint8(0, opt_attributes);
            O(b)
        }
    }
    function anim() {
        draw();
        window_.requestAnimationFrame(anim)
    }
    function onResize() {
        n = window_.innerWidth;
        r = window_.innerHeight;
        canvas2.width = canvas.width = n;
        canvas2.height = canvas.height = r;
        draw();
    }
    function Ma() {
        var a;
        a = 1 * Math.max(r / 1080, n / 1920);
        return a *= C
    }
    function Za() {
        if (0 != h.length) {
            for (var a = 0,
            b = 0; b < h.length; b++) a += h[b].size;
            a = Math.pow(Math.min(64 / a, 1), .4) * Ma();
            l = (9 * l + a) / 10
        }
    }
    function draw() {
        var a, b, c = +new Date; ++$a;
        F = +new Date;
        if (0 < h.length) {
            Za();
            for (var d = a = b = 0; d < h.length; d++) h[d].updatePos(),
            b += h[d].x / h.length,
            a += h[d].y / h.length;
            P = b;
            Q = a;
            R = l;
            s = (s + b) / 2;
            t = (t + a) / 2
        } else s = (29 * s + P) / 30,
        t = (29 * t + Q) / 30,
        l = (9 * l + R * Ma()) / 10;
        Sa();
        reset();
        ua || ctx.clearRect(0, 0, n, r);
        if (ua) ctx.fillStyle = ga ? "#111111": "#F2FBFF",
        ctx.globalAlpha = .05,
        ctx.fillRect(0, 0, n, r),
        ctx.globalAlpha = 1;
        else {
            ctx.fillStyle = ga ? "#111111": "#F2FBFF";
            ctx.fillRect(0, 0, n, r);
            ctx.save();
            ctx.strokeStyle = ga ? "#AAAAAA": "#000000";
            ctx.globalAlpha = .2;
            ctx.scale(l, l);
            b = n / l;
            a = r / l;
            for (d = -.5 + ( - s + b / 2) % 50; d < b; d += 50) ctx.beginPath(),
            ctx.moveTo(d, 0),
            ctx.lineTo(d, a),
            ctx.stroke();
            for (d = -.5 + ( - t + a / 2) % 50; d < a; d += 50) ctx.beginPath(),
            ctx.moveTo(0, d),
            ctx.lineTo(b, d),
            ctx.stroke();
            ctx.restore()
        }
        q.sort(function(a, b) {
            return a.size == b.size ? a.id - b.id: a.size - b.size
        });
        ctx.save();
        ctx.translate(n / 2, r / 2);
        ctx.scale(l, l);
        ctx.translate( - s, -t);
        for (d = 0; d < H.length; d++) H[d].draw();
        for (d = 0; d < q.length; d++) q[d].draw();
        if (ra) {
            aa = (3 * aa + pa) / 4;
            ba = (3 * ba + qa) / 4;
            ctx.save();
            ctx.strokeStyle = "#FFAAAA";
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.globalAlpha = .5;
            ctx.beginPath();
            for (d = 0; d < h.length; d++) ctx.moveTo(h[d].x, h[d].y),
            ctx.lineTo(aa, ba);
            ctx.stroke();
            ctx.restore()
        }
        ctx.restore();
        v && v.width && ctx.drawImage(v, n - v.width - 10, 10);
        I = Math.max(I, ab());
        0 != I && (null == ha && (ha = new ia(24, "#FFFFFF")), ha.setValue("Score: " + ~~ (I / 100)), a = ha.render(), b = a.width, ctx.globalAlpha = .2, ctx.fillStyle = "#000000", ctx.fillRect(10, r - 10 - 24 - 10, b + 10, 34), ctx.globalAlpha = 1, ctx.drawImage(a, 15, r - 10 - 24 - 5));
        bb();
        c = +new Date - c;
        c > 1E3 / 60 ? x -= .01 : c < 1E3 / 65 && (x += .01);.4 > x && (x = .4);
        1 < x && (x = 1)
    }
    function bb() {
        if (options && va.width) {
            var a = n / 5;
            ctx.drawImage(va, 5, 5, a, a)
        }
    }
    function ab() {
        for (var a = 0,
        b = 0; b < h.length; b++) a += h[b].nSize * h[b].nSize;
        return a
    }
    function Ia() {
        v = null;
        if (null != w || 0 != z.length) if (null != w || ja) {
            v = document.createElement("canvas");
            var a = v.getContext("2d"),
            b = 60,
            b = null == w ? b + 24 * z.length: b + 180,
            c = Math.min(200, .3 * n) / 200;
            v.width = 200 * c;
            v.height = b * c;
            a.scale(c, c);
            a.globalAlpha = .4;
            a.fillStyle = "#000000";
            a.fillRect(0, 0, 200, b);
            a.globalAlpha = 1;
            a.fillStyle = "#FFFFFF";
            c = null;
            c = "Leaderboard";
            a.font = "30px Ubuntu";
            a.fillText(c, 100 - a.measureText(c).width / 2, 40);
            if (null == w) for (a.font = "20px Ubuntu", b = 0; b < z.length; ++b) c = z[b].name || "An unnamed cell",
            ja || (c = "An unnamed cell"),
            -1 != E.indexOf(z[b].id) ? (h[0].name && (c = h[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle = "#FFFFFF",
            c = b + 1 + ". " + c,
            a.fillText(c, 100 - a.measureText(c).width / 2, 70 + 24 * b);
            else for (b = c = 0; b < w.length; ++b) angEnd = c + w[b] * Math.PI * 2,
            a.fillStyle = cb[b + 1],
            a.beginPath(),
            a.moveTo(100, 140),
            a.arc(100, 140, 80, c, angEnd, !1),
            a.fill(),
            c = angEnd
        }
    }
    function Ja(a, b, c, d, e, f) {
        q.push(this);
        y[a] = this;
        this.id = a;
        this.ox = this.x = b;
        this.oy = this.y = c;
        this.oSize = this.size = d;
        this.color = e;
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(f)
    }
    function ia(a, b, c, d) {
        a && (this._size = a);
        b && (this._color = b);
        this._stroke = !!c;
        d && (this._strokeColor = d)
    }
})(window, jQuery);