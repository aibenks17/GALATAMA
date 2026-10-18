/* GALAHAMUY INJECTOR — default = aturan file asli */
(function () {
  'use strict';
  if (typeof App === 'undefined') { alert('INJECTOR: pasang script ini SETELAH script utama.'); return; }
  const MINGGU = {
  "nama": "",
  "secret": [
    {
      "label": "SECRET",
      "poin": 1
    },
    {
      "label": "SECRET BIG",
      "poin": 2
    },
    {
      "label": "SECRET MUTASI",
      "poin": 2
    },
    {
      "label": "SECRET BIG + MUTASI",
      "poin": 3
    },
    {
      "label": "SECRET SHINY",
      "poin": 2
    },
    {
      "label": "SECRET BIG SHINY",
      "poin": 3
    },
    {
      "label": "SECRET BIG SHINY MUTASI",
      "poin": 4
    }
  ],
  "mode": {
    "SURVIVAL": [
      {
        "label": "MITOS",
        "poin": 0
      },
      {
        "label": "SECRET",
        "poin": 1
      },
      {
        "label": "SECRET BIG",
        "poin": 2
      },
      {
        "label": "SECRET MUTASI",
        "poin": 2
      },
      {
        "label": "SECRET BIG + MUTASI",
        "poin": 3
      }
    ],
    "MEGALODON": [
      {
        "label": "MEGALODON",
        "poin": 4
      },
      {
        "label": "MEGALODON MUTASI",
        "poin": 5
      },
      {
        "label": "MEGALODON BIG / SHINY",
        "res": "MEGALODON BIG/SHINY",
        "poin": 5
      },
      {
        "label": "MEGALODON BIG SHINY",
        "poin": 6
      },
      {
        "label": "MEGALODON BIG MUTASI SHINY",
        "poin": 7
      }
    ],
    "GLACIAL_SERPENT": [
      {
        "label": "GLACIAL SERPENT",
        "poin": 4
      },
      {
        "label": "GLACIAL SERPENT MUTASI",
        "poin": 5
      },
      {
        "label": "GLACIAL SERPENT BIG / SHINY",
        "res": "GLACIAL SERPENT BIG/SHINY",
        "poin": 5
      },
      {
        "label": "GLACIAL SERPENT BIG SHINY",
        "poin": 6
      },
      {
        "label": "GLACIAL SERPENT BIG MUTASI SHINY",
        "poin": 7
      }
    ],
    "DARK_MEGALODON": [
      {
        "label": "DARK MEGALODON",
        "poin": 4
      },
      {
        "label": "DARK MEGALODON MUTASI",
        "poin": 5
      },
      {
        "label": "DARK MEGALODON BIG / SHINY",
        "res": "DARK MEGALODON BIG/SHINY",
        "poin": 5
      },
      {
        "label": "DARK MEGALODON BIG SHINY",
        "poin": 6
      },
      {
        "label": "DARK MEGALODON BIG MUTASI SHINY",
        "poin": 7
      }
    ]
  },
  "lokasi": [
    {
      "n": "FISHERMAN ISLAND",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "OCEAN",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "KOHANA",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "EVERBLOOM",
          "poin": 10
        },
        {
          "label": "EVERBLOOM MUTASI",
          "poin": 15
        }
      ]
    },
    {
      "n": "KOHANA VOLCANO",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "VOLCANIC CAVERN",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "CORAL REEFS",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "ESOTERIC DEPTHS",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "TROPICAL GROVE",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "CRATER ISLAND",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "FB 100KG++",
          "poin": 4
        },
        {
          "label": "FB MAXTON",
          "poin": 5
        },
        {
          "label": "FB MAXTON MUTASI",
          "poin": 6
        }
      ]
    },
    {
      "n": "SISYPUS STATUE",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "PELAGON",
          "poin": 2
        },
        {
          "label": "PELAGON BIG",
          "poin": 3
        },
        {
          "label": "PELAGON BIG MUTASI",
          "poin": 4
        },
        {
          "label": "PELAGON BIG MUTASI SHINY",
          "poin": 5
        }
      ]
    },
    {
      "n": "TREASURE ROOM",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "PLANETARY OBSERVATORY",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "LAVA BASIN",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "ANCIENT JUNGLE",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "RAGNAREX",
          "poin": 10
        },
        {
          "label": "RAGNAREX MUTASI",
          "poin": 15
        },
        {
          "label": "THUNDERZILLA",
          "poin": 10
        },
        {
          "label": "THUNDERZILLA MUTASI",
          "poin": 15
        }
      ]
    },
    {
      "n": "UNDERGROUND CELLAR",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "SACRED TEMPLE",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "STINGRAY SHORES",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "COPPER CANYON",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "COPPER CANYON MINES",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "CERULEAN DRAGON",
          "poin": 10
        },
        {
          "label": "CERULEAN DRAGON MUTASI",
          "poin": 15
        }
      ]
    },
    {
      "n": "UNDERWATER CITY",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "SEA EATER",
          "poin": 10
        },
        {
          "label": "SEA EATER MUTASI",
          "poin": 15
        },
        {
          "label": "FLOURIVANE",
          "poin": 10
        },
        {
          "label": "FLOURIVANE MUTASI",
          "poin": 15
        }
      ]
    },
    {
      "n": "SEWERS",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "KOHANA LAB",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "ANCIENT RUIN",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "PIRATE COVE",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "PIRATE TREASURE ROOM",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "CRYSTAL DEPTHS",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "GLOOMCAP GROTTO",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "CRIMSON DREADTUSK",
          "poin": 10
        },
        {
          "label": "CRIMSON DREADTUSK MUTASI",
          "poin": 15
        }
      ]
    },
    {
      "n": "ELEMENTAL ISLAND",
      "mitos": false,
      "mp": 1,
      "tombol": []
    },
    {
      "n": "THRONE ROOM",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "HYDRA",
          "poin": 10
        },
        {
          "label": "HYDRA MUTASI",
          "poin": 15
        },
        {
          "label": "OVERLORD HYDRA",
          "poin": 10
        },
        {
          "label": "OVERLORD HYDRA MUTASI",
          "poin": 15
        }
      ]
    },
    {
      "n": "WEATHER MACHINE",
      "mitos": false,
      "mp": 1,
      "tombol": [
        {
          "label": "WORM FISH",
          "poin": 2
        },
        {
          "label": "WORM FISH BIG",
          "poin": 3
        },
        {
          "label": "WORM FISH SHINY/MUTASI",
          "poin": 3
        },
        {
          "label": "WORM FISH BIG SHINY",
          "poin": 4
        },
        {
          "label": "WORM FISH BIG MUTASI SHINY",
          "poin": 5
        }
      ]
    }
  ]
};

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const L = App.pointRushLocations;
  L.length = 0; MINGGU.lokasi.forEach(l => L.push(l.n));
  const info = n => MINGGU.lokasi.find(l => l.n === n) || { tombol: [] };
  const bt = a => (a || []).map(b => ({ label: b.label, res: b.res || b.label, poin: +b.poin || 0 }));
  let aktif = [];

  App.renderCatchGrid = function () {
    const m = App.state.mode; let b = [];
    if (m === 'SURVIVAL') b = bt(MINGGU.mode.SURVIVAL);
    else {
      b = bt(MINGGU.secret);
      if (m === 'POINT_RUSH') {
        const l = info(App.state.pointRushLocation);
        if (l.mitos) b.push({ label: 'MITOS', res: 'MITOS', poin: +l.mp || 0 });
        b = b.concat(bt(l.tombol));
      } else b = b.concat(bt(MINGGU.mode[m]));
    }
    aktif = b;
    document.getElementById('catchGrid').innerHTML = b.map((x, i) =>
      `<div class="catch-card" onclick="GalatamaInjector.kirim(${i})"><span style="font-weight:800; font-size:10px;">${esc(x.label)}</span><span style="font-weight:900; color:var(--cyan-accent); font-size:12px;">+${x.poin}</span></div>`).join('');
  };

  App.renderPointRush = function () {
    if (App.state.mode !== 'POINT_RUSH') return;
    document.querySelectorAll('.card-head').forEach(e => {
      if (e.textContent.includes('SPINWHEEL')) e.textContent = 'POINT RUSH — SPINWHEEL ACAK TEMPAT (' + L.length + ' LOKASI)' + (MINGGU.nama ? ' · ' + MINGGU.nama : '');
    });
    document.getElementById('spinwheelDisplay').innerText = App.state.pointRushLocation;
    document.getElementById('pointRushLocationGrid').innerHTML = MINGGU.lokasi.map((l, i) => {
      const m = l.mitos ? ' <span style="font-size:7px; color:var(--gold);">[🔥M]</span>' : '';
      const f = (l.tombol && l.tombol.length) ? ' <span style="font-size:7px; color:var(--cyan-accent);">[🐟 FORGOTTEN]</span>' : '';
      return `<div class="loc-btn ${App.state.pointRushLocation === l.n ? 'active' : ''}" onclick="App.setPointRushLocation(App.pointRushLocations[${i}])"><span class="loc-name">${esc(l.n)}${m}${f}</span></div>`;
    }).join('');
  };

  const loadAsli = App.loadStorage;
  App.loadStorage = function () {
    loadAsli.apply(App, arguments);
    if (!L.includes(App.state.pointRushLocation)) App.state.pointRushLocation = L[0] || '';
  };

  window.GalatamaInjector = { config: MINGGU, kirim(i) { const b = aktif[i]; if (b) App.submitCatch(b.res, b.poin); } };
})();
