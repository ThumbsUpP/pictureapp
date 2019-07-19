(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    17: function(t, e, a) {},
    37: function(t, e, a) {
      t.exports = a(72);
    },
    42: function(t, e, a) {},
    71: function(t, e, a) {},
    72: function(t, e, a) {
      'use strict';
      a.r(e);
      var n = a(0),
        c = a.n(n),
        r = a(14),
        i = a.n(r),
        o = a(30),
        s = (a(42), a(2)),
        u = a(13),
        l = a(8),
        E = {
          FETCHED: 'FETCHED',
          FETCH_ERROR: 'FETCH_ERROR',
          FETCHING: 'FETCHING',
        },
        p = a(15),
        m = a(32),
        f = {
          pictures: [],
          favorites: [],
          fetchStatus: E.NOT_FETCHED,
          fetchCount: 0,
          isFetchingData: !0,
        },
        h = {
          key: 'root',
          storage: a.n(m).a,
          blacklist: [
            'pictures',
            'fetchStatus',
            'fetchStatus',
            'fetchCount',
            'isFetchingData',
          ],
        },
        O = Object(p.a)(h, function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : f,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case 'SET_FETCH_STATUS':
              return Object(l.a)({}, t, { fetchStatus: e.status });
            case 'ADD_PICTURES':
              return Object(
                l.a,
              )({}, t, { pictures: [].concat(Object(u.a)(e.pictures), Object(u.a)(t.pictures)) });
            case 'ADD_TO_FAVORITE':
              return Object(l.a)({}, t, {
                pictures: Object(s.filter)(function(t) {
                  var a = t.id;
                  return e.id !== a;
                })(t.pictures),
                favorites: [].concat(
                  Object(u.a)(t.favorites),
                  Object(u.a)(
                    Object(s.filter)(function(t) {
                      var a = t.id;
                      return e.id === a;
                    })(t.pictures),
                  ),
                ),
              });
            case 'INCREMENT_FETCH_COUNT':
              return Object(l.a)({}, t, { fetchCount: t.fetchCount + 1 });
            case 'TOGGLE_IS_FETCHING_DATA':
              return Object(l.a)({}, t, { isFetchingData: !t.isFetchingData });
            default:
              return t;
          }
        }),
        d = a(33),
        v = a.n(d),
        T = E.FETCHING,
        b = E.FETCH_ERROR,
        _ = E.FETCHED,
        C = function(t) {
          return { type: 'SET_FETCH_STATUS', status: t };
        },
        g = Object(s.pick)('pictures'),
        F = Object(s.pick)('favorites'),
        j = Object(s.pick)('isFetchingData'),
        D = (a(17), a(9)),
        N = function(t) {
          var e = t.isFetchingData,
            a = t.toggleIsFetchingData;
          return c.a.createElement(
            'div',
            { className: 'main-container-header' },
            c.a.createElement('p', null, 'Main container'),
            c.a.createElement(
              'button',
              {
                className: 'button '.concat(
                  e ? 'button-stop' : 'button-resume',
                ),
                onClick: a,
              },
              e ? 'Stop' : 'Resume',
            ),
          );
        },
        I = Object(D.b)(j, {
          toggleIsFetchingData: function() {
            return { type: 'TOGGLE_IS_FETCHING_DATA' };
          },
        })(N),
        S = function(t) {
          var e = t.pictures,
            a = t.addToFavorite;
          return c.a.createElement(
            'div',
            { className: 'container main' },
            c.a.createElement(I, null),
            c.a.createElement(
              'div',
              { className: 'main-container-list' },
              Object(s.map)(function(t) {
                var e = t.img_src,
                  n = t.id,
                  r = t.earth_date;
                return c.a.createElement(
                  'div',
                  {
                    key: 'pict-main'.concat(n, '-').concat(r),
                    onClick: function() {
                      return a(n);
                    },
                    className: 'image-container',
                  },
                  c.a.createElement('img', {
                    src: e,
                    width: 200,
                    height: 200,
                    alt: r,
                  }),
                );
              })(e),
            ),
          );
        },
        R = a(36),
        y = Object(s.compose)(
          Object(D.b)(
            (function() {
              for (
                var t = arguments.length, e = new Array(t), a = 0;
                a < t;
                a++
              )
                e[a] = arguments[a];
              return function() {
                for (
                  var t = arguments.length, a = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  a[n] = arguments[n];
                return Object(l.a)(
                  {},
                  Object(s.reduce)(function(t, e) {
                    return Object(l.a)({}, t, e.apply(void 0, a));
                  }, {})(e),
                );
              };
            })(g, j),
            {
              fetchPicture: function() {
                return function(t, e) {
                  var a = e(),
                    n = a.fetchCount;
                  a.isFetchingData &&
                    (t(C(T)),
                    v.a
                      .get(
                        ''
                          .concat(
                            'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1',
                            '&sol=',
                          )
                          .concat(n, '&api_key=DEMO_KEY'),
                      )
                      .then(function(e) {
                        var a = e.data;
                        t({ type: 'ADD_PICTURES', pictures: a.photos }),
                          t({ type: 'INCREMENT_FETCH_COUNT' }),
                          t(C(_));
                      })
                      .catch(function() {
                        return t(C(b));
                      }));
                };
              },
              addToFavorite: function(t) {
                return { type: 'ADD_TO_FAVORITE', id: t };
              },
            },
          ),
          Object(R.a)({
            componentDidMount: function() {
              var t = this.props.fetchPicture;
              t(),
                setInterval(function() {
                  t();
                }, 5e3);
            },
          }),
        )(S),
        A =
          (a(71),
          function(t) {
            var e = t.favorites;
            return c.a.createElement(
              'div',
              { className: 'container' },
              c.a.createElement('p', null, 'Favorites container'),
              c.a.createElement(
                'div',
                { className: 'favorite-container-list' },
                Object(s.map)(function(t) {
                  var e = t.img_src,
                    a = t.id,
                    n = t.earth_date;
                  return c.a.createElement(
                    'div',
                    {
                      key: 'pict-main'.concat(a, '-').concat(n),
                      className: 'image-container',
                    },
                    c.a.createElement('img', {
                      src: e,
                      width: 200,
                      height: 200,
                      alt: n,
                    }),
                  );
                })(e),
              ),
            );
          }),
        H = Object(D.b)(F)(A),
        w = function() {
          return c.a.createElement(
            'div',
            { className: 'App' },
            c.a.createElement(
              'header',
              { className: 'App-header' },
              c.a.createElement(
                'p',
                null,
                ' Choose your favorites picture from the mars rover !',
              ),
            ),
            c.a.createElement(H, null),
            c.a.createElement(y, null),
          );
        },
        k = a(5),
        G = a(35);
      a.d(e, 'persistor', function() {
        return P;
      });
      var U = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || k.d,
        M = Object(k.e)(O, U(Object(k.a)(o.a))),
        P = Object(p.b)(M);
      i.a.render(
        c.a.createElement(
          D.a,
          { store: M },
          c.a.createElement(
            G.PersistGate,
            { persistor: P },
            c.a.createElement(w, null),
          ),
        ),
        document.getElementById('root'),
      );
    },
  },
  [[37, 1, 2]],
]);
//# sourceMappingURL=main.7f7645f6.chunk.js.map
