// Noir case-file icons and indirect evidence wording for Mystery Grid.
(function () {
  // ---- Noir case-file icons: ink sketches on aged paper ----
  const INK = '#24222b', PAPER = '#f4ecdc', RED = '#8e2f3a', BRASS = '#b08a4a';
  const S = `fill="none" stroke="${INK}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"`;
  const wrap = (body, label, bg = PAPER) =>
    `<svg class="item sticker" viewBox="0 0 32 32" role="img" aria-label="${label}"><title>${label}</title>` +
    `<rect x=".5" y=".5" width="31" height="31" rx="5" fill="${bg}" stroke="#cdbd9e"/>` +
    `<rect x="2.3" y="2.3" width="27.4" height="27.4" rx="3.5" fill="none" stroke="#cdbd9e" stroke-width=".5"/>${body}</svg>`;

  // Suspects: silhouettes in a cameo frame, recognisable by headwear.
  const bust = `<path d="M7 29q1-7.5 9-8.5q8 1 9 8.5z" fill="${INK}"/><rect x="14.2" y="17" width="3.6" height="5" fill="${INK}"/><ellipse cx="16" cy="13.6" rx="5.3" ry="6" fill="${INK}"/>`;
  const cameo = body => `<ellipse cx="16" cy="16" rx="12" ry="13" fill="#ebe0c9" stroke="${BRASS}" stroke-width="1.1"/><clipPath id="cm"><ellipse cx="16" cy="16" rx="12" ry="13"/></clipPath><g clip-path="url(#cm)">${body}</g>`;
  const suspects = {
    'Professor Ash': cameo(bust + `<g fill="none" stroke="${PAPER}" stroke-width=".9"><circle cx="13.7" cy="14" r="1.9"/><circle cx="18.3" cy="14" r="1.9"/><path d="M15.6 14h.8"/></g><path d="M13.6 23l2.4 1.2 2.4-1.2v2.4l-2.4-1.2-2.4 1.2z" fill="${PAPER}"/>`),
    'Lady Scarlet': cameo(`<path d="M10 15q-1.5 7 1 9h10q2.5-2 1-9z" fill="${INK}"/>` + bust + `<ellipse cx="16" cy="9.3" rx="10" ry="2.2" fill="${RED}"/><path d="M11 9q0-5.5 5-5.5t5 5.5z" fill="${RED}"/><path d="M20 6q5-4 6 1" fill="none" stroke="${INK}" stroke-width="1"/>`),
    'Doctor Raven': cameo(`<circle cx="16" cy="6.8" r="2.8" fill="${INK}"/>` + bust + `<circle cx="16" cy="10" r="2.4" fill="${BRASS}" stroke="${PAPER}" stroke-width=".6"/><circle cx="16" cy="10" r=".7" fill="${INK}"/><path d="M12 29l4-5 4 5" fill="none" stroke="${PAPER}" stroke-width=".9"/>`),
    'Captain Flint': cameo(bust + `<path d="M9.6 10.2h12.8l-1.5-4.6h-9.8z" fill="${INK}" stroke="${PAPER}" stroke-width=".6"/><path d="M9 10.6h14" stroke="${BRASS}" stroke-width="1.2"/><circle cx="16" cy="7.8" r="1" fill="${BRASS}"/><path d="M13.2 17.4q2.8-1.4 5.6 0" stroke="${PAPER}" stroke-width=".9" fill="none"/>`),
    'Miss Ivory': cameo(`<path d="M10 13q-1 8 1.5 9.5h9q2.5-1.5 1.5-9.5z" fill="${INK}"/>` + bust + `<g fill="${PAPER}"><circle cx="20.3" cy="9" r="1.1"/><circle cx="21.6" cy="10.2" r="1.1"/><circle cx="20" cy="10.8" r="1.1"/></g><circle cx="20.6" cy="10" r=".6" fill="${RED}"/><circle cx="16" cy="22.5" r=".6" fill="${PAPER}"/><circle cx="14.5" cy="22.2" r=".5" fill="${PAPER}"/><circle cx="17.5" cy="22.2" r=".5" fill="${PAPER}"/>`),
    'Mr. Onyx': cameo(bust + `<rect x="11.5" y="1.5" width="9" height="7" fill="${INK}" stroke="${PAPER}" stroke-width=".6"/><rect x="9" y="8.3" width="14" height="1.6" rx=".8" fill="${INK}" stroke="${PAPER}" stroke-width=".6"/><path d="M11.8 7h8.4" stroke="${RED}" stroke-width="1"/><circle cx="18.2" cy="14" r="1.9" fill="none" stroke="${BRASS}" stroke-width=".9"/><path d="M20 14.6q1 3-.4 6" stroke="${BRASS}" stroke-width=".5" fill="none"/>`)
  };

  const items = {
    // Weapons
    Dagger: `<g transform="rotate(40 16 16)"><path d="M16 2.5l2.4 13h-4.8z" fill="#fffaf0" ${S}/><path d="M16 5v9.5" stroke="${INK}" stroke-width=".6"/><rect x="10.5" y="15.5" width="11" height="2.2" rx="1" fill="${INK}"/><rect x="14.6" y="17.7" width="2.8" height="6.5" fill="${BRASS}" ${S.replace('fill="none" ', '')}/><path d="M14.8 19.5h2.4M14.8 21.5h2.4" stroke="${INK}" stroke-width=".6"/><circle cx="16" cy="25.6" r="1.7" fill="${INK}"/></g>`,
    Poison: `<rect x="13" y="4" width="6" height="2.6" rx=".8" fill="${INK}"/><path d="M14 6.6v3.4q-6 2.4-6 8.5a8 8 0 0 0 16 0q0-6.1-6-8.5V6.6" fill="#fffaf0" ${S}/><path d="M8.6 20.5h14.8M9 22.8h14M10 25h12" stroke="${INK}" stroke-width=".5"/><rect x="11.5" y="14" width="9" height="5.5" fill="${PAPER}" stroke="${INK}" stroke-width=".8"/><circle cx="16" cy="16" r="1.4" fill="${RED}"/><path d="M14 18.4l4-1.2M14 17.2l4 1.2" stroke="${RED}" stroke-width=".6"/>`,
    Rope: `<ellipse cx="16" cy="22" rx="9.5" ry="4.2" ${S}/><ellipse cx="16" cy="18.5" rx="9" ry="4" fill="${PAPER}" ${S}/><ellipse cx="16" cy="15" rx="8.5" ry="3.8" fill="${PAPER}" ${S}/><ellipse cx="16" cy="15" rx="4" ry="1.6" ${S}/><path d="M24 14q4-6-1-9" ${S}/><path d="M10 16.6l1.4-1.2M13 17.6l1.2-1.4M17 17.8l1-1.6M20.5 17.4l.8-1.6M9 20l1.3-1.2M12 21.4l1.2-1.4M16 21.8l1-1.6M20 21.4l.9-1.6" stroke="${INK}" stroke-width=".5"/>`,
    Hammer: `<g transform="rotate(-35 16 16)"><rect x="14.8" y="11" width="2.4" height="17" rx="1" fill="${BRASS}" ${S.replace('fill="none" ', '')}/><path d="M8 6.5h13l3 2-3 2H8z" fill="${INK}"/><path d="M9 7.6h11" stroke="${PAPER}" stroke-width=".5"/></g>`,
    Wrench: `<g transform="rotate(40 16 16)"><path d="M13.6 12h4.8v14.5a2.4 2.4 0 0 1-4.8 0z" fill="#fffaf0" ${S}/><path d="M11 4.5a6.2 6.2 0 0 0 2.6 8.3h4.8A6.2 6.2 0 0 0 21 4.5l-2.6 3.4h-4.8z" fill="#fffaf0" ${S}/><path d="M16 15v10" stroke="${INK}" stroke-width=".5"/></g>`,
    Candlestick: `<path d="M16 3.2q2.6 3.2 0 5q-2.6-1.8 0-5z" fill="${RED}"/><path d="M16 8.2v1.2" stroke="${INK}" stroke-width=".8"/><rect x="13.3" y="9.4" width="5.4" height="9" fill="#fffaf0" ${S}/><path d="M9.5 18.6h13q-2 2.2-6.5 2.2t-6.5-2.2z" fill="${BRASS}" ${S.replace('fill="none" ', '')}/><path d="M14.6 21v4h2.8v-4" fill="${BRASS}" ${S.replace('fill="none" ', '')}/><path d="M10 27.6q0-2.6 6-2.6t6 2.6z" fill="${BRASS}" ${S.replace('fill="none" ', '')}/>`,
    // Locations
    Library: `<path d="M5 27h22M5 5h22" ${S}/><rect x="6" y="9" width="3" height="18" fill="${INK}"/><rect x="9.6" y="7" width="3.2" height="20" fill="#fffaf0" ${S}/><rect x="13.4" y="10" width="2.6" height="17" fill="${RED}"/><rect x="16.6" y="8" width="3.4" height="19" fill="#fffaf0" ${S}/><path d="M21 27l3.2-17.5 2.8.6L23.8 27.5" fill="${BRASS}" ${S.replace('fill="none" ', '')}/><path d="M9.6 10h3.2M16.6 11h3.4M9.6 24h3.2M16.6 24h3.4" stroke="${INK}" stroke-width=".6"/>`,
    Study: `<path d="M5 26h22" ${S}/><path d="M9 26v-4.5h7V26" fill="${INK}"/><ellipse cx="12.5" cy="21.5" rx="4" ry="1.2" fill="${INK}"/><path d="M13.2 21L24 4q2.2 4-1.5 8.6T13.2 21z" fill="#fffaf0" ${S}/><path d="M14.5 19l7.8-11.8" stroke="${INK}" stroke-width=".5"/><path d="M16.5 15.6l2.4.2M18.4 12.6l2.6.1M20.2 9.8l2.4-.1" stroke="${INK}" stroke-width=".5"/>`,
    Kitchen: `<path d="M8 13.5h16v8.5a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5z" fill="#fffaf0" ${S}/><path d="M8 16h-2.5M24 16h2.5" ${S}/><path d="M6.5 13.5h19" ${S}/><path d="M13 13.5q0-2.5 3-2.5t3 2.5" ${S}/><path d="M12 8q-1.5-2 0-4M16 8q-1.5-2 0-4M20 8q-1.5-2 0-4" stroke="${INK}" stroke-width=".8" fill="none" stroke-linecap="round"/><path d="M9 19h14M9.5 22h13M10.5 25h11" stroke="${INK}" stroke-width=".5"/>`,
    Garden: `<path d="M16 28V15" ${S}/><path d="M16 22q-5-1-6.5-4.5q4.5-.5 6.5 3.5M16 25q4-1 5.5-4.5q-4 0-5.5 3.5" fill="#fffaf0" ${S}/><path d="M18.5 18l1.2.6M13.4 19.4l-1.1.7" stroke="${INK}" stroke-width=".6"/><path d="M11 10q0-6 5-6t5 6q0 5-5 5t-5-5z" fill="${RED}" ${S}/><path d="M13 9q3-3.6 6 0M14 11.6q2 1.6 4 0M16 5.5q-2 2 0 4" stroke="${PAPER}" stroke-width=".7" fill="none"/>`,
    Cellar: `<path d="M6 28V14a10 10 0 0 1 20 0v14z" fill="${INK}"/><path d="M8.2 28V14.4a7.8 7.8 0 0 1 15.6 0V28" fill="none" stroke="${PAPER}" stroke-width=".6"/><path d="M10 28h12v-2.6H10zM11.4 25.4h9.2v-2.6h-9.2zM12.8 22.8h6.4v-2.6h-6.4z" fill="${BRASS}" stroke="${PAPER}" stroke-width=".4"/><circle cx="16" cy="13" r="1.6" fill="${RED}"/>`,
    Gallery: `<rect x="4.5" y="6" width="23" height="19" fill="${BRASS}" ${S.replace('fill="none" ', '')}/><rect x="7.3" y="8.8" width="17.4" height="13.4" fill="#fffaf0" stroke="${INK}" stroke-width=".8"/><path d="M7.3 20l4.5-5 3 3 4-5.5 5.9 7.5" fill="none" stroke="${INK}" stroke-width="1"/><circle cx="12" cy="12" r="1.5" fill="${RED}"/><path d="M16 6V3.5M13 3.5h6" ${S}/>`,
    // Motives
    Greed: `<g fill="${BRASS}" ${S.replace('fill="none" ', '')}><ellipse cx="13" cy="24.5" rx="7" ry="2.3"/><ellipse cx="13" cy="21.5" rx="7" ry="2.3"/><ellipse cx="13" cy="18.5" rx="7" ry="2.3"/><ellipse cx="21" cy="12.5" rx="5.8" ry="5.8"/></g><text x="21" y="15.3" font-size="8" font-family="Georgia,serif" font-weight="700" text-anchor="middle" fill="${INK}">$</text>`,
    Revenge: `<g ${S}><path d="M6 26L24 6M24 6l1.5-1.5M24 6h-2.4M24 6v2.4"/><path d="M26 26L8 6M8 6L6.5 4.5M8 6h2.4M8 6v2.4"/></g><path d="M8.6 21.6l3.6 3.6M23.4 21.6l-3.6 3.6" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/><circle cx="16" cy="16" r="1.4" fill="${RED}"/>`,
    Jealousy: `<path d="M4 16q12-12 24 0q-12 12-24 0z" fill="#fffaf0" ${S}/><circle cx="16" cy="16" r="4.6" fill="#4f6b4a" ${S}/><circle cx="16" cy="16" r="2" fill="${INK}"/><circle cx="17.3" cy="14.7" r=".8" fill="${PAPER}"/><path d="M8 11l-1.4-2M12 8.6l-.8-2.2M16 8V5.6M20 8.6l.8-2.2M24 11l1.4-2" stroke="${INK}" stroke-width=".9" stroke-linecap="round"/>`,
    Fear: `<path d="M16 3v10" stroke="${INK}" stroke-width=".6"/><ellipse cx="16" cy="18.5" rx="3.8" ry="4.6" fill="${INK}"/><circle cx="16" cy="13.2" r="2.4" fill="${INK}"/><g ${S}><path d="M12.5 16.5l-4-3-2 1.5M12.3 18.5l-5 0-1.5 2M12.5 20.5l-4 3 .5 2.5M13 22l-2.5 4"/><path d="M19.5 16.5l4-3 2 1.5M19.7 18.5l5 0 1.5 2M19.5 20.5l4 3-.5 2.5M19 22l2.5 4"/></g><circle cx="15.2" cy="12.8" r=".5" fill="${RED}"/><circle cx="16.8" cy="12.8" r=".5" fill="${RED}"/>`,
    Blackmail: `<rect x="4.5" y="8" width="23" height="16" fill="#fffaf0" ${S}/><path d="M4.5 8l11.5 9 11.5-9M4.5 24l8.5-8M27.5 24l-8.5-8" ${S}/><circle cx="16" cy="17" r="3.4" fill="${RED}"/><path d="M14.6 17h2.8M16 15.6v2.8" stroke="${PAPER}" stroke-width=".7"/>`,
    Debt: `<path d="M7 4h14l4 4v20H7z" fill="#fffaf0" ${S}/><path d="M21 4v4h4" ${S}/><text x="16" y="17" font-size="7" font-family="Georgia,serif" font-weight="700" text-anchor="middle" fill="${RED}">IOU</text><path d="M10 21h12M10 24h8" stroke="${INK}" stroke-width=".6"/>`
  };

  function pocketWatch(name) {
    const hour = name === 'Midnight' ? 12 : parseInt(name, 10);
    const night = hour >= 11 || hour <= 1;
    const a = hour * Math.PI / 6, hx = 16 + 4.3 * Math.sin(a), hy = 18 - 4.3 * Math.cos(a);
    const face = night ? INK : '#fffaf0', mark = night ? PAPER : INK, hand = night ? BRASS : RED;
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const t = i * Math.PI / 6, r1 = i % 3 ? 7.2 : 6.4;
      ticks += `M${(16 + r1 * Math.sin(t)).toFixed(2)} ${(18 - r1 * Math.cos(t)).toFixed(2)}L${(16 + 8 * Math.sin(t)).toFixed(2)} ${(18 - 8 * Math.cos(t)).toFixed(2)}`;
    }
    const body = `<path d="M16 3.5q-2.5 0-2.5 2t2.5 2" fill="none" stroke="${BRASS}" stroke-width="1.2"/><rect x="14.4" y="6" width="3.2" height="2.4" rx=".6" fill="${BRASS}"/>` +
      `<circle cx="16" cy="18" r="10" fill="${BRASS}" ${S.replace('fill="none" ', '')}/><circle cx="16" cy="18" r="8.6" fill="${face}" stroke="${INK}" stroke-width=".6"/>` +
      `<path d="${ticks}" stroke="${mark}" stroke-width=".7"/>` +
      `<path d="M16 18V11.4M16 18L${hx.toFixed(2)} ${hy.toFixed(2)}" stroke="${hand}" stroke-width="1.4" stroke-linecap="round"/><circle cx="16" cy="18" r="1" fill="${hand}"/>` +
      (night ? `<path d="M26 3.5a2.6 2.6 0 1 0 2.4 3.6a2 2 0 1 1-2.4-3.6z" fill="${INK}"/>` : '');
    return wrap(body, name);
  }

  window.cuteIcon = function (name) {
    if (suspects[name]) return wrap(suspects[name], name);
    if (items[name]) return wrap(items[name], name);
    if (/PM|AM|Midnight/.test(name)) return pocketWatch(name);
    return null;
  };

  // ---- Indirect evidence ----
  // Every item has a nickname used in reports; the dossier reveals it.
  const aliases = [
    ['the guest in round spectacles', 'the lady in the scarlet hat', 'the one with the head mirror', 'the guest in the gold-trimmed cap', 'the guest with the flower clip', 'the gentleman in the top hat'],
    ['the pointed blade', 'the little labelled bottle', 'the coiled cord', 'the heavy striking tool', 'the steel turning tool', 'the brass light holder'],
    ['the room of a thousand pages', 'the room of ink and quill', 'the room where the pot boils', 'the place where flowers grow', 'the room beneath the floor', 'the room of framed paintings'],
    ['a hunger for money', 'an old score to settle', 'a green-eyed heart', 'a deep dread', 'a secret worth paying for', 'money still owed'],
    ['two hours before ten', 'an hour after eight', 'two hours before midnight', 'an hour before midnight', 'the moment the date changed', 'an hour past midnight']
  ];
  window.cuteAlias = (category, index) => aliases[category]?.[index];

  const plain = (c, name) => {
    if (c === 0) return name;
    if (c === 3) return name.toLowerCase();
    if (c === 4) return name === 'Midnight' ? 'at midnight' : 'at ' + name;
    return 'the ' + name.toLowerCase();
  };
  const verb = ['', 'carried', 'waited in', 'acted out of', 'struck'];
  const base = ['', 'carry', 'wait in', 'act out of', 'strike'];
  const cap = s => s[0].toUpperCase() + s.slice(1);
  const witnesses = ['the butler', 'a nervous maid', 'the gardener', 'the chauffeur', 'the cook', 'the night porter'];

  // How often reports use a nickname instead of the real name, by difficulty.
  const aliasRate = [.35, .55, .7, .8];

  window.cuteEvidence = function (clue, index, label, difficulty) {
    const roll = k => ((index * 37 + k * 11 + difficulty * 5) % 100) / 100;
    const ref = (c, i, k) => {
      const nick = aliases[c]?.[i];
      if (nick && roll(k) < aliasRate[difficulty]) return nick;
      return plain(c, label(c, i));
    };
    const A = ref(clue.a, clue.x, 1), B = ref(clue.b, clue.y, 2);
    const subject = clue.a === 0 ? A : `whoever ${verb[clue.a]} ${A}`;
    const yesLine = `${subject} ${verb[clue.b]} ${B}`;
    const noLine = `${subject} did not ${base[clue.b]} ${B}`;
    const witness = witnesses[(index * 7 + difficulty) % witnesses.length];
    switch (index % 3) {
      case 0:
        return { type: 'Witness statement', text: `“I'm certain of it — ${clue.yes ? yesLine : noLine}.” — ${witness}` };
      case 1:
        return { type: 'Intercepted note', text: cap(clue.yes ? yesLine : noLine) + '.' };
      default:
        return {
          type: 'Corrected testimony',
          text: clue.yes
            ? `${cap(witness)} first swore that ${noLine}, then admitted that was a lie.`
            : `${cap(witness)} first claimed that ${yesLine}, but later took the claim back.`
        };
    }
  };
})();
