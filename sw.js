if (!self.define) {
    let r,
        s = {};
    const e = (e, l) => (
        (e = new URL(e + ".js", l).href),
        s[e] ||
        new Promise((s) => {
            if ("document" in self) {
                const r = document.createElement("script");
                (r.src = e), (r.onload = s), document.head.appendChild(r);
            } else (r = e), importScripts(e), s();
        }).then(() => {
            let r = s[e];
            if (!r) throw new Error(`Module ${e} didn’t register its module`);
            return r;
        })
    );
    self.define = (l, u) => {
        const o =
            r ||
            ("document" in self ? document.currentScript.src : "") ||
            location.href;
        if (s[o]) return;
        let i = {};
        const n = (r) => e(r, o),
            c = { module: { uri: o }, exports: i, require: n };
        s[o] = Promise.all(l.map((r) => c[r] || n(r))).then((r) => (u(...r), i));
    };
}
define(["./workbox-e4df0f2a"], function (r) {
    "use strict";
    self.skipWaiting(),
        r.clientsClaim(),
        r.precacheAndRoute(
            [
                { url: "index.html", revision: "9d1378ca48c91243ee09a1c31141136c" },
                { url: "registerSW.js", revision: "402b66900e731ca748771b6fc5e7a068" },
                { url: "resources/AdGuardHome.1d0e702b.js", revision: null },
                { url: "resources/AdGuardHome.58ee6c83.css", revision: null },
                { url: "resources/CopyToClipboard.a17573c3.css", revision: null },
                { url: "resources/CopyToClipboard.b3bb62c3.js", revision: null },
                { url: "resources/Emby.1c49ce56.css", revision: null },
                { url: "resources/Emby.774b2d69.js", revision: null },
                { url: "resources/Healthchecks.52385485.js", revision: null },
                { url: "resources/Healthchecks.c88f2822.css", revision: null },
                { url: "resources/index.868de8fa.js", revision: null },
                { url: "resources/index.8b54b14d.css", revision: null },
                { url: "resources/Lidarr.14af5f72.js", revision: null },
                { url: "resources/Lidarr.f62c6a04.css", revision: null },
                { url: "resources/Mealie.7d08fd6d.js", revision: null },
                { url: "resources/Medusa.c8786ae6.js", revision: null },
                { url: "resources/Medusa.e73e6d80.css", revision: null },
                { url: "resources/OctoPrint.4b446c51.css", revision: null },
                { url: "resources/OctoPrint.78837a04.js", revision: null },
                { url: "resources/OpenWeather.c3a274b3.css", revision: null },
                { url: "resources/OpenWeather.ef672564.js", revision: null },
                { url: "resources/PaperlessNG.e5ae8f5d.js", revision: null },
                { url: "resources/PiHole.05678db2.js", revision: null },
                { url: "resources/PiHole.eb737172.css", revision: null },
                { url: "resources/Ping.97b4391d.js", revision: null },
                { url: "resources/Ping.f54b6bba.css", revision: null },
                { url: "resources/Portainer.2f776cbf.js", revision: null },
                { url: "resources/Portainer.8fec3428.css", revision: null },
                { url: "resources/Prometheus.33bec39c.css", revision: null },
                { url: "resources/Prometheus.c72d7c41.js", revision: null },
                { url: "resources/Prowlarr.2c1ae3fa.css", revision: null },
                { url: "resources/Prowlarr.87d4f896.js", revision: null },
                { url: "resources/Proxmox.04b227e5.css", revision: null },
                { url: "resources/Proxmox.5626d857.js", revision: null },
                { url: "resources/qBittorrent.70f91624.js", revision: null },
                { url: "resources/qBittorrent.dc942469.css", revision: null },
                { url: "resources/Radarr.eb9f7ff0.css", revision: null },
                { url: "resources/Radarr.edc85f6c.js", revision: null },
                { url: "resources/Rtorrent.071d65d7.js", revision: null },
                { url: "resources/Rtorrent.a1b7781a.css", revision: null },
                { url: "resources/SABnzbd.556c2ce6.js", revision: null },
                { url: "resources/SABnzbd.f94c9543.css", revision: null },
                { url: "resources/service.541fc1e6.js", revision: null },
                { url: "resources/Sonarr.1dfb8d14.css", revision: null },
                { url: "resources/Sonarr.f6e010b1.js", revision: null },
                { url: "resources/SpeedtestTracker.2eb3df74.js", revision: null },
                { url: "resources/Tautulli.8e62748f.js", revision: null },
                { url: "resources/Tautulli.d3f86925.css", revision: null },
                { url: "resources/Tdarr.411225c5.js", revision: null },
                { url: "resources/Tdarr.beb4fb95.css", revision: null },
                { url: "resources/UptimeKuma.29705488.css", revision: null },
                { url: "resources/UptimeKuma.5195bf2a.js", revision: null },
                { url: "resources/WUD.5673736c.css", revision: null },
                { url: "resources/WUD.cf7de712.js", revision: null },
                {
                    url: "assets/manifest.json",
                    revision: "32b26ee6e51fb4c94ac9a6398aded962",
                },
            ],
            {}
        ),
        r.cleanupOutdatedCaches();
});
