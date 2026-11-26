// Cute sticker icons and indirect evidence wording for Mystery Grid.
(function () {
  const eyes = (cx, cy, s = 1, mood = 'happy') => {
    const dx = 2.6 * s, r = 1.15 * s;
    let out = `<circle cx="${cx - dx}" cy="${cy}" r="${r}" fill="#2b2140"/><circle cx="${cx + dx}" cy="${cy}" r="${r}" fill="#2b2140"/>` +
      `<circle cx="${cx - dx + .4 * s}" cy="${cy - .45 * s}" r="${.42 * s}" fill="#fff"/><circle cx="${cx + dx + .4 * s}" cy="${cy - .45 * s}" r="${.42 * s}" fill="#fff"/>` +
      `<ellipse cx="${cx - dx - 1.5 * s}" cy="${cy + 1.7 * s}" rx="${1.2 * s}" ry="${.7 * s}" fill="#ff8fa8" opacity=".75"/><ellipse cx="${cx + dx + 1.5 * s}" cy="${cy + 1.7 * s}" rx="${1.2 * s}" ry="${.7 * s}" fill="#ff8fa8" opacity=".75"/>`;
    const sw = .9 * s;
    if (mood === 'happy') out += `<path d="M${cx - 1.1 * s} ${cy + 1.5 * s}q${1.1 * s} ${1.1 * s} ${2.2 * s} 0" fill="none" stroke="#2b2140" stroke-width="${sw}" stroke-linecap="round"/>`;
    if (mood === 'oh') out += `<ellipse cx="${cx}" cy="${cy + 2.2 * s}" rx="${.8 * s}" ry="${1 * s}" fill="#2b2140"/>`;
    if (mood === 'grr') out += `<path d="M${cx - dx - 1.2 * s} ${cy - 2 * s}l${2 * s} ${.9 * s}M${cx + dx + 1.2 * s} ${cy - 2 * s}l${-2 * s} ${.9 * s}M${cx - 1 * s} ${cy + 2.2 * s}h${2 * s}" stroke="#2b2140" stroke-width="${sw}" stroke-linecap="round"/>`;
    if (mood === 'side') out += `<path d="M${cx - .9 * s} ${cy + 2 * s}h${1.8 * s}" stroke="#2b2140" stroke-width="${sw}" stroke-linecap="round"/>`;
    return out;
  };
  const wrap = (bg, body, label) =>
    `<svg class="item sticker" viewBox="0 0 32 32" role="img" aria-label="${label}"><title>${label}</title><rect x=".5" y=".5" width="31" height="31" rx="10" fill="${bg}"/>${body}</svg>`;

  // ---- Suspects ----
  const person = (skin, jacket, hairBack, hairFront, extra, mood) =>
    `<path d="M5 32a11 10 0 0 1 22 0" fill="${jacket}"/>${hairBack}<circle cx="16" cy="16" r="8.4" fill="${skin}"/>${hairFront}${eyes(16, 17, .95, mood)}${extra}`;
  const suspects = {
    'Professor Ash': ['#e6ecff', person('#f6cfa8', '#7e91db', '', '<path d="M8 15q0-8 8-8t8 8q-3-4-8-4t-8 4" fill="#c9ccd6"/>',
      '<g fill="none" stroke="#33405f" stroke-width="1"><circle cx="13.4" cy="17" r="2.5"/><circle cx="18.6" cy="17" r="2.5"/><path d="M15.9 17h.2"/></g><path d="M13.5 26l2.5 1.3 2.5-1.3v2.6l-2.5-1.3-2.5 1.3z" fill="#e5546f"/>')],
    'Lady Scarlet': ['#ffe3ec', person('#f6c3a8', '#de6d96', '<path d="M7 17q-1 9 3 11h12q4-2 3-11z" fill="#c8503c"/>', '<path d="M7.6 15q1-8 8.4-8t8.4 8q-4-3-8.4-3t-8.4 3" fill="#c8503c"/>',
      '<path d="M6 9.5h20l-4-5h-12z" fill="#e2405f"/><circle cx="22" cy="6" r="2" fill="#ffd166"/>')],
    'Doctor Raven': ['#ddf3f1', person('#b98366', '#5aa9b3', '<circle cx="16" cy="7.5" r="3.6" fill="#2f2733"/>', '<path d="M7.6 16q0-8.5 8.4-8.5t8.4 8.5q-2-4-8.4-4.5t-8.4 4.5" fill="#2f2733"/>',
      '<circle cx="16" cy="11" r="2.2" fill="#dfe8f2" stroke="#8aa1b6" stroke-width=".8"/><path d="M12 32v-5l4 3 4-3v5" fill="#fff"/>', 'side')],
    'Captain Flint': ['#e3e9fb', person('#e8bb93', '#4f68a8', '', '',
      '<path d="M7 11h18l-2.5-5.5h-13z" fill="#2f3f6e"/><path d="M6.5 11h19" stroke="#ffd166" stroke-width="1.4"/><circle cx="16" cy="8" r="1.3" fill="#ffd166"/><path d="M12.6 20.3q3.4-1.6 6.8 0q-3.4 1.2-6.8 0" fill="#8a6a55"/>', 'oh')],
    'Miss Ivory': ['#f4e8ff', person('#f8d2bd', '#ad80bc', '<path d="M7.5 16q-.5 8 2.5 9h12q3-1 2.5-9z" fill="#f3dfa2"/>', '<path d="M7.6 16q0-9 8.4-9t8.4 9q-5-1-7-5q-2 4-9.8 5" fill="#f3dfa2"/>',
      '<g fill="#ff8fb7"><circle cx="22.5" cy="9.5" r="1.4"/><circle cx="24.3" cy="10.8" r="1.4"/><circle cx="22.2" cy="11.6" r="1.4"/></g><circle cx="23" cy="10.7" r=".9" fill="#ffd166"/>')],
    'Mr. Onyx': ['#e7e9f0', person('#a46d58', '#4b556f', '', '<path d="M8 15q0-6 8-6t8 6q-3-2.5-8-2.5t-8 2.5" fill="#2a2730"/>',
      '<rect x="10.5" y="1.5" width="11" height="8" rx="1.5" fill="#24222b"/><rect x="7.5" y="8.8" width="17" height="2" rx="1" fill="#24222b"/><rect x="10.5" y="7" width="11" height="1.5" fill="#d94c63"/><circle cx="18.6" cy="17" r="2.4" fill="none" stroke="#d8b24a" stroke-width=".9"/><path d="M21 17.5q1 3 0 6" stroke="#d8b24a" stroke-width=".5" fill="none"/>', 'side')]
  };

  const W = '#ffe3ec', L = '#dff4e3', M = '#efe6ff', T = '#dcecff';
  const items = {
    // Weapons
    Dagger: [W, '<path d="M16 3l4 14h-8z" fill="#e3e9f4" stroke="#7b88a6" stroke-width=".8" stroke-linejoin="round"/><rect x="9.5" y="17" width="13" height="3" rx="1.5" fill="#f2b544"/><rect x="14.2" y="20" width="3.6" height="6.5" rx="1.2" fill="#a66b45"/><circle cx="16" cy="28" r="2" fill="#f2b544"/>' + eyes(16, 12.5, .55)],
    Poison: [W, '<rect x="12.8" y="2.5" width="6.4" height="3.5" rx="1.2" fill="#b07a4f"/><rect x="13.6" y="5.5" width="4.8" height="5" fill="#d9f2e1" stroke="#3f8a5d" stroke-width=".8"/><circle cx="16" cy="19.5" r="9" fill="#8fdca4" stroke="#3f8a5d" stroke-width=".9"/><path d="M8 18q8-3 16 0v1.5a8 8 0 0 1-16 0z" fill="#5fc485" opacity=".6"/><circle cx="21" cy="14" r="1.3" fill="#fff" opacity=".8"/>' + eyes(16, 19.5, .9, 'oh')],
    Rope: [W, '<path d="M23 24q5 2 3 6" fill="none" stroke="#c48b47" stroke-width="2.6" stroke-linecap="round"/><circle cx="15.5" cy="15.5" r="10" fill="#f0c88a" stroke="#c48b47" stroke-width="1.2"/><circle cx="15.5" cy="15.5" r="7" fill="none" stroke="#c48b47" stroke-width="1"/><circle cx="15.5" cy="15.5" r="4" fill="none" stroke="#c48b47" stroke-width="1" stroke-dasharray="3 2"/>' + eyes(15.5, 15.5, .8)],
    Hammer: [W, '<rect x="14" y="13" width="4" height="16" rx="2" fill="#cf8f58"/><rect x="5" y="5" width="22" height="9" rx="3.5" fill="#9aa6c1"/><rect x="5" y="5" width="22" height="3" rx="1.5" fill="#b8c2d8"/>' + eyes(16, 9.6, .7, 'grr')],
    Wrench: [W, '<rect x="13" y="13" width="6" height="16" rx="3" fill="#aab6cf"/><circle cx="16" cy="9" r="7.2" fill="#aab6cf"/><rect x="13.6" y="0" width="4.8" height="7.5" rx="1.5" fill="' + W + '"/>' + eyes(16, 20.5, .6)],
    Candlestick: [W, '<path d="M16 2.5q4 4 0 6.5q-4-2.5 0-6.5z" fill="#ffb23f"/><rect x="11" y="9" width="10" height="12" rx="2.5" fill="#fff6dc" stroke="#e3c98f" stroke-width=".8"/><ellipse cx="16" cy="21.5" rx="9" ry="2.4" fill="#f2b544"/><rect x="14" y="22" width="4" height="4" fill="#e0a33a"/><ellipse cx="16" cy="27" rx="7" ry="2.3" fill="#f2b544"/>' + eyes(16, 14.5, .6)],
    // Locations
    Library: [L, '<rect x="7" y="5" width="18" height="22" rx="3" fill="#7a9cf0"/><rect x="7" y="5" width="4" height="22" rx="2" fill="#5a7bd0"/><rect x="22" y="7" width="3" height="18" fill="#fffdf4"/><path d="M11 9h10" stroke="#ffd166" stroke-width="1.6"/>' + eyes(16.5, 16, .8)],
    Study: [L, '<path d="M9 13l3.5-8h9L25 13z" fill="#ffcf5c"/><path d="M11 13l6 9 6-9z" fill="#fff3b0" opacity=".55"/><rect x="15.2" y="13" width="1.6" height="11" fill="#8a6a52"/><ellipse cx="16" cy="26" rx="7" ry="2.4" fill="#8a6a52"/>' + eyes(17, 9.6, .6)],
    Kitchen: [L, '<path d="M10 8q-1-3 1-5M16 8q-1-3 1-5M22 8q-1-3 1-5" stroke="#b5c1d6" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M5 14h22v8a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z" fill="#ff8a6b"/><rect x="2.5" y="15" width="3" height="3" rx="1.2" fill="#e56a4c"/><rect x="26.5" y="15" width="3" height="3" rx="1.2" fill="#e56a4c"/><ellipse cx="16" cy="13" rx="11.5" ry="2.4" fill="#e56a4c"/><circle cx="16" cy="10.4" r="1.6" fill="#e56a4c"/>' + eyes(16, 19.5, .85)],
    Garden: [L, '<path d="M16 17v12" stroke="#4fae6b" stroke-width="2"/><ellipse cx="11.5" cy="24" rx="4" ry="2" fill="#6cc785" transform="rotate(-25 11.5 24)"/><ellipse cx="20.5" cy="23" rx="4" ry="2" fill="#6cc785" transform="rotate(25 20.5 23)"/><g fill="#ff9fc4"><circle cx="16" cy="6" r="4"/><circle cx="22" cy="10.5" r="4"/><circle cx="19.7" cy="17.5" r="4"/><circle cx="12.3" cy="17.5" r="4"/><circle cx="10" cy="10.5" r="4"/></g><circle cx="16" cy="12.3" r="4.6" fill="#ffd166"/>' + eyes(16, 12.2, .55)],
    Cellar: [L, '<rect x="6.5" y="5" width="19" height="23" rx="8" fill="#c98b52"/><path d="M7 11h18M7 22h18" stroke="#8b5a32" stroke-width="1.6"/><path d="M12 5.5v22M20 5.5v22" stroke="#b07642" stroke-width=".7"/>' + eyes(16, 16, .85)],
    Gallery: [L, '<rect x="5" y="6" width="22" height="20" rx="2.5" fill="#f2b544"/><rect x="8" y="9" width="16" height="14" fill="#bfe3ff"/><path d="M8 23l5-6 3 3 3-4 5 7z" fill="#7cc98f"/><circle cx="19.5" cy="13" r="2.8" fill="#ffd166"/>' + eyes(19.5, 13, .35)],
    // Motives
    Greed: [M, '<path d="M12 9q-2-4 1-5.5q3 1 3 1t3-1q3 1.5 1 5.5z" fill="#e9b949"/><path d="M12 9h8q8 6 6 13a6 6 0 0 1-6 5h-8a6 6 0 0 1-6-5q-2-7 6-13z" fill="#f6d36b"/><path d="M11.5 9.5h9" stroke="#b9862a" stroke-width="1.4"/><text x="16" y="25.5" font-size="5" font-weight="700" text-anchor="middle" fill="#b9862a" font-family="sans-serif">$</text>' + eyes(16, 17, .8)],
    Revenge: [M, '<path d="M8 21a5 5 0 0 1 1-10a6 6 0 0 1 11-2a5 5 0 0 1 5 7a3 3 0 0 1-2 5z" fill="#9aa7c7"/><path d="M16 21l-2.5 5h3l-1.5 4.5 5-7h-3l1.5-2.5z" fill="#ffd166"/>' + eyes(16, 15, .8, 'grr')],
    Jealousy: [M, '<path d="M16 28S4 20.5 4 12.5A6 6 0 0 1 16 9a6 6 0 0 1 12 3.5C28 20.5 16 28 16 28z" fill="#7fd49a"/>' + eyes(16, 15.5, .9, 'side')],
    Fear: [M, '<path d="M7 28V14a9 9 0 0 1 18 0v14l-3-2.5-3 2.5-3-2.5-3 2.5-3-2.5z" fill="#fff" stroke="#c6cbe0" stroke-width=".9"/>' + eyes(16, 14.5, .9, 'oh')],
    Blackmail: [M, '<rect x="4" y="8" width="24" height="17" rx="2.5" fill="#fffaf0" stroke="#d8c7a6" stroke-width=".9"/><path d="M4.5 9l11.5 9 11.5-9" fill="none" stroke="#d8c7a6" stroke-width=".9"/><circle cx="16" cy="18" r="3.4" fill="#d94c63"/>' + eyes(16, 12, .55, 'side')],
    Debt: [M, '<ellipse cx="16" cy="18" rx="11" ry="8.5" fill="#ffb3c7"/><path d="M9 11l-1.5-4 5 2.5z" fill="#ff9ab4"/><rect x="13.5" y="9.6" width="5" height="1.3" rx=".6" fill="#d9718e"/><ellipse cx="25" cy="18.5" rx="2.6" ry="2.2" fill="#ff9ab4"/><circle cx="24.3" cy="18.5" r=".5" fill="#a8466a"/><circle cx="25.8" cy="18.5" r=".5" fill="#a8466a"/><rect x="9" y="24.5" width="3" height="3.5" rx="1" fill="#ff9ab4"/><rect x="18" y="24.5" width="3" height="3.5" rx="1" fill="#ff9ab4"/>' + eyes(15, 17, .75, 'oh')]
  };

  function clock(name) {
    const hour = name === 'Midnight' ? 12 : parseInt(name, 10);
    const a = hour * Math.PI / 6, hx = 16 + 4.2 * Math.sin(a), hy = 17.5 - 4.2 * Math.cos(a);
    const night = hour >= 11 || hour <= 1;
    const body = (night ? '<path d="M24 4.5a3.2 3.2 0 1 0 3 4.3a2.6 2.6 0 1 1-3-4.3z" fill="#ffd166"/>' : '') +
      '<circle cx="8.5" cy="7.5" r="3.4" fill="#ff8fa8"/><circle cx="23.5" cy="7.5" r="3.4" fill="' + (night ? 'none' : '#ff8fa8') + '"/>' +
      '<path d="M9 28l2-3M23 28l-2-3" stroke="#5b7fb8" stroke-width="1.6" stroke-linecap="round"/>' +
      `<circle cx="16" cy="17.5" r="10" fill="${night ? '#3c4f86' : '#fffaf0'}" stroke="#5b7fb8" stroke-width="1.6"/>` +
      `<g fill="${night ? '#9fb3e6' : '#c3cde2'}"><circle cx="16" cy="9.6" r=".8"/><circle cx="23.9" cy="17.5" r=".8"/><circle cx="16" cy="25.4" r=".8"/><circle cx="8.1" cy="17.5" r=".8"/></g>` +
      `<path d="M16 17.5L16 10.8M16 17.5L${hx.toFixed(2)} ${hy.toFixed(2)}" stroke="${night ? '#ffd166' : '#e5546f'}" stroke-width="1.6" stroke-linecap="round"/>` +
      `<circle cx="16" cy="17.5" r="1.3" fill="${night ? '#ffd166' : '#e5546f'}"/>` +
      `<ellipse cx="10.4" cy="21.5" rx="1.3" ry=".8" fill="#ff8fa8" opacity=".8"/><ellipse cx="21.6" cy="21.5" rx="1.3" ry=".8" fill="#ff8fa8" opacity=".8"/>`;
    return wrap(T, body, name);
  }

  window.cuteIcon = function (name) {
    if (suspects[name]) return wrap(suspects[name][0], suspects[name][1], name);
    if (items[name]) return wrap(items[name][0], items[name][1], name);
    if (/PM|AM|Midnight/.test(name)) return clock(name);
    return null;
  };

  // ---- Indirect evidence ----
  // Every item has a nickname used in reports; the dossier reveals it.
  const aliases = [
    ['the guest in round spectacles', 'the lady in the scarlet hat', 'the one with the head mirror', 'the guest in the gold-trimmed cap', 'the guest with the flower clip', 'the gentleman in the top hat'],
    ['the pointed blade', 'the little green bottle', 'the coiled cord', 'the heavy striking tool', 'the steel turning tool', 'the brass light holder'],
    ['the room of a thousand pages', 'the room with the desk lamp', 'the room where the pot boils', 'the place where flowers grow', 'the room beneath the floor', 'the room of framed paintings'],
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
