import { s as l } from "./service.541fc1e6.js";
import {
  _ as p,
  G as h,
  r as y,
  o as s,
  c as f,
  w as o,
  a as r,
  t as a,
  b as i,
  F as d,
  d as _,
  e as m,
  n as g,
} from "./index.868de8fa.js";
const k = {
    name: "PiHole",
    mixins: [l],
    props: { item: Object },
    components: { Generic: h },
    data: () => ({ status: "", ads_percentage_today: 0 }),
    computed: {
      percentage: function () {
        return this.ads_percentage_today
          ? this.ads_percentage_today.toFixed(1)
          : "";
      },
    },
    created() {
      this.fetchStatus();
    },
    methods: {
      fetchStatus: async function () {
        const t = this.item.apikey
            ? `?summaryRaw&auth=${this.item.apikey}`
            : "",
          c = await this.fetch(`/api.php${t}`).catch((e) => console.log(e));
        (this.status = c.status),
          (this.ads_percentage_today = c.ads_percentage_today);
      },
    },
  },
  b = { class: "title is-4" },
  v = { class: "subtitle is-6" };
function x(t, c, e, w, B, n) {
  const u = y("Generic");
  return (
    s(),
    f(
      u,
      { item: e.item },
      {
        content: o(() => [
          r("p", b, a(e.item.name), 1),
          r("p", v, [
            e.item.subtitle
              ? (s(), i(d, { key: 0 }, [_(a(e.item.subtitle), 1)], 64))
              : n.percentage
              ? (s(),
                i(d, { key: 1 }, [_(a(n.percentage) + "% blocked ", 1)], 64))
              : m("", !0),
          ]),
        ]),
        indicator: o(() => [
          t.status
            ? (s(),
              i(
                "div",
                { key: 0, class: g(["status", t.status]) },
                a(t.status),
                3
              ))
            : m("", !0),
        ]),
        _: 1,
      },
      8,
      ["item"]
    )
  );
}
const P = p(k, [
  ["render", x],
  ["__scopeId", "data-v-7e5d4f57"],
]);
export { P as default };
