/* GALAHAMUY INJECTOR — dibuat oleh Builder (18/10/2026) */
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
      "tombol": [
        {
          "label": "",
          "poin": 1
        }
      ],
      "sb": 0
    },
    {
      "n": "OCEAN",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
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
      ],
      "sb": 0
    },
    {
      "n": "KOHANA VOLCANO",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "VOLCANIC CAVERN",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "CORAL REEFS",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "ESOTERIC DEPTHS",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "TROPICAL GROVE",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
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
      ],
      "sb": 0
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
      ],
      "sb": 0
    },
    {
      "n": "TREASURE ROOM",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "PLANETARY OBSERVATORY",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "LAVA BASIN",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
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
      ],
      "sb": 0
    },
    {
      "n": "UNDERGROUND CELLAR",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "SACRED TEMPLE",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "STINGRAY SHORES",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "COPPER CANYON",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
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
      ],
      "sb": 0
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
      ],
      "sb": 0
    },
    {
      "n": "SEWERS",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "KOHANA LAB",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "ANCIENT RUIN",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "PIRATE COVE",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "PIRATE TREASURE ROOM",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
    },
    {
      "n": "CRYSTAL DEPTHS",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
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
      ],
      "sb": 0
    },
    {
      "n": "ELEMENTAL ISLAND",
      "mitos": false,
      "mp": 1,
      "tombol": [],
      "sb": 0
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
      ],
      "sb": 0
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
      ],
      "sb": 0
    },
    {
      "n": "HALLOWS EVE",
      "mitos": true,
      "mp": 1,
      "sb": 0,
      "tombol": [
        {
          "label": "SWEETOOTH GOURDLING",
          "poin": 2
        },
        {
          "label": "MEAWSOLEUM",
          "poin": 5
        },
        {
          "label": "",
          "poin": 1
        }
      ]
    }
  ]
};

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const L = App.pointRushLocations;
  const info = n => MINGGU.lokasi.find(l => l.n === n) || { tombol: [] };
  const bt = a => (a || []).map(b => ({ label: b.label, res: b.res || b.label, poin: +b.poin || 0 }));
  let aktif = [];

  // 1) Sinkronkan daftar lokasi + data lama (mitos / ikan khusus) dengan config
  L.length = 0; MINGGU.lokasi.forEach(l => L.push(l.n));
  App.mitosMaps.length = 0; MINGGU.lokasi.forEach(l => { if (l.mitos) App.mitosMaps.push(l.n); });
  Object.keys(App.locationSpecificFishNames).forEach(k => delete App.locationSpecificFishNames[k]);
  MINGGU.lokasi.forEach(l => { if (l.tombol && l.tombol.length) App.locationSpecificFishNames[l.n] = l.tombol.map(t => t.label); });

  // 2) Tombol mode tambahan (mis. DARK_MEGALODON) kalau belum ada di HTML
  const grid = document.querySelector('.mode-grid');
  if (grid) Object.keys(MINGGU.mode).forEach(k => {
    if (document.getElementById('m-' + k)) return;
    const d = document.createElement('div');
    d.className = 'mode-btn'; d.id = 'm-' + k; d.textContent = k.replace(/_/g, ' ');
    d.onclick = () => App.changeMode(k);
    grid.appendChild(d);
  });

  // 3) Grup dropdown tangkapan sesuai mode & lokasi
  function groups() {
    const m = App.state.mode, g = [];
    if (m === 'SURVIVAL') { g.push({ t: 'SURVIVAL', items: bt(MINGGU.mode.SURVIVAL) }); return g; }
    const loc = m === 'POINT_RUSH' ? info(App.state.pointRushLocation) : null;
    const sb = loc ? (+loc.sb || 0) : 0;
    g.push({ t: 'SECRET', items: bt(MINGGU.secret).map(x => ({ label: x.label, res: x.res, poin: x.poin + sb })) });
    if (loc) {
      let it = [];
      if (loc.mitos) it.push({ label: 'MITOS', res: 'MITOS', poin: +loc.mp || 0 });
      it = it.concat(bt(loc.tombol));
      if (it.length) g.push({ t: 'KHUSUS LOKASI: ' + App.state.pointRushLocation, items: it });
    } else {
      const it = bt(MINGGU.mode[m]);
      if (it.length) g.push({ t: m.replace(/_/g, ' '), items: it });
    }
    return g;
  }

  App.renderCatchGrid = function () {
    const wrap = document.getElementById('dropdownWrapper');
    if (!wrap) return;
    aktif = groups();
    wrap.innerHTML = aktif.map((g, gi) =>
      `<div class="dropdown-box"><label>${esc(g.t)}</label>` +
      `<select id="gsel_${gi}" class="input-field" style="width:100%;">` +
      g.items.map((x, i) => `<option value="${i}">${esc(x.label)} (+${x.poin})</option>`).join('') +
      `</select><button class="btn btn-purple btn-sm" style="margin-top:6px;" onclick="GalatamaInjector.kirim(${gi})">Kirim Poin</button></div>`
    ).join('');
  };

  App.renderPointRush = function () {
    if (App.state.mode !== 'POINT_RUSH') return;
    document.querySelectorAll('.card-head').forEach(e => {
      if (e.textContent.includes('SPINWHEEL')) e.textContent = 'POINT RUSH — SPINWHEEL ACAK TEMPAT (' + L.length + ' LOKASI)' + (MINGGU.nama ? ' · ' + MINGGU.nama : '');
    });
    document.getElementById('spinwheelDisplay').innerText = App.state.pointRushLocation;
    document.getElementById('pointRushLocationGrid').innerHTML = MINGGU.lokasi.map((l, i) => {
      const m = l.mitos ? ' <span style="font-size:7px; color:var(--gold);">[🔥 MITOS]</span>' : '';
      const f = (l.tombol && l.tombol.length) ? ' <span style="font-size:7px; color:var(--cyan-accent);">[🐟 FG]</span>' : '';
      return `<div class="loc-btn ${App.state.pointRushLocation === l.n ? 'active' : ''}" onclick="App.setPointRushLocation(App.pointRushLocations[${i}])"><span class="loc-name">${esc(l.n)}${m}${f}</span></div>`;
    }).join('');
  };

  // 4) Kalau lokasi tersimpan sudah tidak ada di config, pindah ke lokasi pertama
  const loadAsli = App.loadStorage;
  App.loadStorage = function () {
    loadAsli.apply(App, arguments);
    if (!L.includes(App.state.pointRushLocation)) App.state.pointRushLocation = L[0] || '';
  };

  window.GalatamaInjector = {
    config: MINGGU,
    kirim(gi) {
      const g = aktif[gi]; if (!g) return;
      const sel = document.getElementById('gsel_' + gi); if (!sel) return;
      const b = g.items[+sel.value]; if (b) App.submitCatch(b.res, b.poin);
    }
  };
})();
