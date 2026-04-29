// Cursor
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i % 3) * 0.08 + 's';
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => obs.observe(el));

// Conditions — typewriter
const twEl = document.getElementById('conditionsTypewriter');
const twLines = [
  '새 친구를 만들고 싶은데 낯선 곳은 어려운 사람',
  '친구가 없진 않은데 그렇다고 많지도 않은 사람',
  '친구의 친구가 탐나는데 그동안 숨긴 사람',
  '무리에 잘 녹아드는 둥근 성격 가진 사람',
  '내향형이거나 외향형, 혹은 그 사이 어딘가의 사람',
  '여럿이서 놀고 싶은데 친구가 없는 사람',
  '오늘 하루만 보고 말아도 실망하지 않을 사람',
  '그래도 앞으로 계속 볼 마음이 있는 사람',
  '운명적으로 영원한 친구를 만들고 싶은 사람',
  '모르는 사람에게 선물 주는 경험을 해보고 싶은 사람',
  '친구의 친구에게 선물을 사줘도 돈 아깝지 않은 사람',
  '빼앗고 싶은 친구가 있으신 사람, 소개 시켜주고 싶은 친구가 있는 사람',
  '올해 새로운 경험을 해보고 싶은 사람',
  '집가면 할 거 없어서 심심한 사람',
  '할거 많은데 그냥 나가서 놀고 싶은 사람',
  '이 프로그램에 흥미가 생긴 사람',
];
const twFull = twLines.join('  ');
let twFired = false;

const twObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !twFired) {
      twFired = true;
      let i = 0;
      const tick = setInterval(() => {
        if (i >= twFull.length) {
          clearInterval(tick);
          twEl.classList.add('done');
          return;
        }
        const ch = twFull[i++];
        twEl.innerHTML += ch;
      }, 30);
    }
  });
}, { threshold: 0.1 });

twObs.observe(document.querySelector('.conditions-section'));
