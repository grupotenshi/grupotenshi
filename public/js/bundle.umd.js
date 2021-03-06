! function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n()
}(0, function () {
    if(isMobile()){
      return
    }

    function e(e, n) {
        return e.map(function (e) {
            return e + (-(t = n) + Math.random() * t * 2);
            var t
        })
    }

    function n(e) {
        var n = e.rainbow;
        void 0 === n && (n = !1);
        var t = e.geometry,
            o = e.material,
            r = e.multiplier,
            a = e.duration,
            s = e.points,
            u = [{
                name: "aPositionStart",
                data: s[0],
                size: 3
            }, {
                name: "aControlPointOne",
                data: s[1],
                size: 3
            }, {
                name: "aControlPointTwo",
                data: s[2],
                size: 3
            }, {
                name: "aPositionEnd",
                data: s[3],
                size: 3
            }, {
                name: "aOffset",
                data: function (e) {
                    return [e * ((1 - a) / (r - 1))]
                },
                size: 1
            }];
        n && u.push({
            name: "aColor",
            data: function (e, n) {
                var t = new THREE.Color;
                return t.setHSL(e / n, .6, .7), [t.r, t.g, t.b]
            },
            size: 3
        });
        var c = "\n    attribute vec3 aPositionStart;\n    attribute vec3 aControlPointOne;\n    attribute vec3 aControlPointTwo;\n    attribute vec3 aPositionEnd;\n    attribute float aOffset;\n    uniform float time;\n    " + (n ? "attribute vec3 aColor; varying vec3 vColor;" : "") + "\n\n    float easeInOutSin(float t){\n      return (1.0 + sin(" + Math.PI + " * t - " + Math.PI + " / 2.0)) / 2.0;\n    }\n\n    vec4 quatFromAxisAngle(vec3 axis, float angle) {\n      float halfAngle = angle * 0.5;\n      return vec4(axis.xyz * sin(halfAngle), cos(halfAngle));\n    }\n\n    vec3 rotateVector(vec4 q, vec3 v) {\n      return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);\n    }\n\n    vec3 bezier4(vec3 a, vec3 b, vec3 c, vec3 d, float t) {\n      return mix(mix(mix(a, b, t), mix(b, c, t), t), mix(mix(b, c, t), mix(c, d, t), t), t);\n    }\n\n    void main(){\n      float tProgress = easeInOutSin(min(1.0, max(0.0, (time - aOffset)) / " + a + "));\n      vec4 quatX = quatFromAxisAngle(vec3(1.0, 0.0, 0.0), -5.0 * tProgress);\n      vec4 quatY = quatFromAxisAngle(vec3(0.0, 1.0, 0.0), -5.0 * tProgress);\n      vec3 basePosition = rotateVector(quatX, rotateVector(quatY, position));\n      vec3 newPosition = bezier4(aPositionStart, aControlPointOne, aControlPointTwo, aPositionEnd, tProgress);\n      float scale = tProgress * 2.0 - 1.0;\n      scale = 1.0 - scale * scale;\n      basePosition *= scale;\n      gl_Position = basePosition + newPosition;\n      " + (n ? "vColor = aColor;" : "") + "\n    }\n  ",
            l = new THREE.Phenomenon({
                attributes: u,
                uniforms: {
                    time: {
                        value: 0
                    }
                },
                vertex: c,
                geometry: t,
                multiplier: r,
                material: o,
                fragment: n ? [["#define PHONG", "varying vec3 vColor;"], ["vec4( diffuse, opacity )", "vec4( vColor, opacity )"], ["vec3 totalEmissiveRadiance = emissive;", "vec3 totalEmissiveRadiance = vColor;"]] : []
            });
        return i.add(l.mesh), l
    }

    var t = new THREE.WebGLRenderer({
        antialias: !0
    });

    t.setClearColor(2171169, 0), t.setSize(window.innerWidth, window.innerHeight), t.setPixelRatio(window.devicePixelRatio >= 2 ? 2 : 1), document.body.appendChild(t.domElement);
    var i = new THREE.Scene,
        o = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 1e4);
    o.position.set(0, 20, 35), o.lookAt(i.position), i.add(o);
    var r = new THREE.AmbientLight("#ffffff", .1);
    i.add(r);
    var a = new THREE.SpotLight(16777215, 1, 80, .25 * Math.PI, 1, 2);

    function s() {
        t.render(i, o)
    }

    function u(e) {
        return "#" + (new THREE.Color).setHSL(e, .5, .5).getHexString()
    }
    a.position.set(0, 40, 0), i.add(a);
    var c = [n({
            geometry: new THREE.IcosahedronGeometry(1, 0),
            material: new THREE.MeshPhongMaterial({
                emissive: u(0),
                specular: "#efefef",
                shininess: 20,
                flatShading: !0
            }),
            multiplier: 200,
            duration: .7,
            points: [function () {
                return e([0, 0, 0], 10)
            }, function () {
                return e([0, 0, 0], 8)
            }, function () {
                return e([0, 0, 0], 2)
            }, function () {
                return e([0, 0, 0], 12)
            }]
        }), n({
            geometry: new THREE.BoxGeometry(1, 1, 1),
            material: new THREE.MeshPhongMaterial({
                emissive: u(.5 / 3),
                specular: "#efefef",
                shininess: 20,
                flatShading: !0
            }),
            multiplier: 200,
            duration: .4,
            points: [function () {
                return e([-10, 0, 0], 4)
            }, function () {
                return e([-2.5, -10, 0], 4)
            }, function () {
                return e([2.5, 10, 0], 4)
            }, function () {
                return e([10, 0, 0], 4)
            }]
        }), n({
            geometry: new THREE.TetrahedronGeometry(1),
            material: new THREE.MeshPhongMaterial({
                emissive: u(.5),
                specular: "#efefef",
                shininess: 20,
                flatShading: !0
            }),
            multiplier: 400,
            duration: .4,
            points: [function () {
                return e([0, 10, 0], 10)
            }, function () {
                return e([0, 0, 0], 10)
            }, function () {
                return e([0, 0, 0], 10)
            }, function () {
                return e([0, -10, 0], 10)
            }]
        }), n({
            rainbow: !0,
            geometry: new THREE.IcosahedronGeometry(.8, 3),
            material: new THREE.MeshPhongMaterial({
                emissive: u(2 / 3),
                specular: "#efefef",
                shininess: 20,
                flatShading: !0
            }),
            multiplier: 400,
            duration: .4,
            points: [function () {
                return e([0, -20, 0], 0)
            }, function () {
                return e([0, 10, 0], 0)
            }, function () {
                return e([0, -10, 0], 10)
            }, function () {
                return e([0, 15, 0], 15)
            }]
        })],
        l = document.querySelectorAll(".heading"),
        f = document.querySelector(".header");
    uos(0, 1, function (e) {
        return s()
    }), uos(0, .05, function (e) {
        return f.style.opacity = 1 - e
    });
    for (var d = 1 / c.length, m = function (e) {
            var n = e * d,
                t = n + .5 * d,
                i = (e + 1) * d;
            uos(n, t, function (n) {
                return c[e].uniforms.time.value = n
            }), uos(t, i, function (n) {
                var t = 2 * n - 1;
                t = 1 - t * t, l[e].style.opacity = e === c.length - 1 ? 1.5 * n : 1.5 * t
            })
        }, v = 0; v < c.length; v += 1) m(v);

    function h() {
        o.aspect = window.innerWidth / window.innerHeight, o.updateProjectionMatrix(), t.setSize(window.innerWidth, window.innerHeight);
        for (var e = document.querySelectorAll(".heading"), n = 0; n < e.length; n += 1) e[n].style.height = window.innerHeight + "px";
        s()
    }
    requestAnimationFrame(function () {
        window.scrollTo(0, 0), h(), f.style.opacity = 1
    }), window.addEventListener("resize", h, !1)
});
