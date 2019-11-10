<template>
    <div class="container">
        <router-link to="/"><logo></logo></router-link>
        <tool-bar></tool-bar>

        <!-- Intro -->
        <section class="section intro">
            <h1>intro</h1>
            <div class="flex-container">
                <div class="image">
                    <!-- <img src="../assets/profile_image.jpeg" alt="profile image"> -->
                </div>
                <p class="text">
                    개발자로서는 2년차, 프론트엔드 직군으로는 1년차가 된 주니어 개발자입니다.<br>
                    기획 및 디자인을 전공하였고, 윈도우 프로그래밍 경력이 1년 있습니다. 이 후 5개월의 웹 퍼블리셔를 거쳐 현재의 프론트엔드 개발자에 이르게 되었습니다.<br>
                    현업에서 Vue.js, RESTful API, jQuery 등의 기술을 사용하여 약 10여개 서비스의 front-end를 담당하여 개발 및 운영하였으며, Node.js, MySQL 등을 이용한 짧은 back-end 경험도 있습니다.<br>
                    개발자로서 필요한 자질 중 하나는 끝없는 자기계발이라고 생각합니다. 그래서 블로그 운영이나 TIL(Today I Learned) 또는 1일 1커밋 등의 공부 습관을 꾸준히 유지하려 노력중이며, 또한 빠르게 발전하는 IT업계에서 뒤쳐지지 않기 위해 배우는 것을 두려워하지 않고 끊임없이 도전하고 있습니다.<br>
                </p>
            </div>
        </section>

        <!-- Time Line -->
        <section class="section timeline">
            <h1>timeline</h1>
            <ol ref="timeline" :style="'transform: translateX(0)'">
                <li ref="firstItem">
                  <div>
                      <time>2010.03</time> 
                      디지털미디어 학부 입학.<br>
                      전공필수로 C언어를 수강하고 흥미를 느꼈으나 좌절감을 맛봄.
                  </div>
                </li>
                <li>
                <div>
                    <time>2015.03</time> 
                    '미디어스코프'에서 콘텐츠 기획자로 인턴 4개월 시작.<br>
                    딱 떨어지지 않고 모호한 경계가 많은 기획자의 일에 어려움과 회의감을 느낌.
                </div>
                </li>
                <li>
                <div>
                    <time>2015.08</time> 
                    안드로이드 앱 개발자 과정 학원 등록.<br>
                    약 4개월간 Java, Database 등 프로그래밍 기초를 배우고 안드로이드 프로젝트를 실습함.
                </div>
                </li>
                <li>
                <div>
                    <time>2015.12</time> 
                    '로드피아' 입사.<br>
                    C++/MFC 프레임워크를 사용하여 윈도우 프로그래밍 시작.
                </div>
                </li>
                <li>
                <div>
                    <time>2016.03</time> 
                    TCP/IP 통신으로 장비에서 데이터 추출하고 MySQL을 이용하여 데이터 저장 및 읽기 등
                    제조공장에 납품하는 POP 솔루션 유지보수 및 커스터마이징 작업에 투입.
                </div>
                </li>
                <li>
                <div>
                    <time>2017.03</time> 
                    윈도우 프로그래밍보다 더욱 시각적으로 유행을 선도하고 흥미로운 컨텐츠를 다루는 웹 개발(front-end)에 관심이 생겨 
                    본격적으로 공부하기 위해 로드피아 퇴사.
                </div>
                </li>
                <li>
                <div>
                    <time>2017.10</time> 
                    약 6개월의 독학 끝에 '더디브랜드'에 퍼블리셔로 입사.<br>
                    다양한 마크업 개발과 api 사용을 경험하였고 
                    웹 호스팅 및 도메인 관리를 통해 전반적인 서버/클라이언트 구조를 이해하고 습득함. 
                </div>
                </li>
                <li>
                <div>
                    <time>2018.02</time> 
                    회사 내 it 인력이 전무한 상태에서 마크업 개발보다 기획 및 PM의 역할을 필요로 하여 퇴사.
                </div>
                </li>
                <li>
                <div>
                    <time>2018.04</time> 
                    '노마드 소프트'에 front-end 개발자로 입사.<br>
                    jQuery 위주의 front-end 개발 패턴에 Vue.js를 도입하고, 
                    ajax와 RESTful API를 사용하여 다양한 웹 서비스 개발.
                </div>
                </li>
                <li>
                <div>
                    <time>2019.05</time> 
                    사내 웹팀 해체에 의한 퇴사.<br>
                    현재까지 다양한 사이드 프로젝트 진행 및 새로운 언어와 프레임워크, 방법론 등을 학습하며 프로그래밍 영역 확장 중.
                </div>
                </li>
                <li ref="lastItem"></li>
            </ol>
            <div class="arrows">
                <button ref="arrowPrev" class="arrow arrow__prev disabled" disabled @click="moveLeft()">
                    <img src="../assets/arrow_prev.svg" alt="prev timeline arrow">
                </button>
                <button ref="arrowNext" class="arrow arrow__next" @click="moveRight()">
                    <img src="../assets/arrow_next.svg" alt="next timeline arrow">
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import ToolBar from '../components/ToolBar.vue';

export default {
	components: {
		Logo,
		ToolBar,
	},
	methods: {
		moveLeft: function() {
			this.animateTimeLine('');
		},
		moveRight: function() {
			this.animateTimeLine('-');
		},
		animateTimeLine: function(sign) {
			const tl = this.$refs.timeline,
				firstItem = this.$refs.firstItem,
				lastItem = this.$refs.lastItem,
				arrowPrev = this.$refs.arrowPrev,
				arrowNext = this.$refs.arrowNext,
				scrolling = 280;

			if (!arrowPrev.disabled) {
				arrowPrev.disabled = true;
			}
			if (!arrowNext.disabled) {
				arrowNext.disabled = true;
			}
			const tlStyle = getComputedStyle(tl);
			// add more browser prefixes if needed here
			const tlTransform =
				tlStyle.getPropertyValue('-webkit-transform') ||
				tlStyle.getPropertyValue('transform');
			const values =
				parseInt(tlTransform.split(',')[4]) + parseInt(`${sign}${scrolling}`);
			tl.style.transform = `translateX(${values}px)`;

			setTimeout(() => {
				this.isElementInViewport(firstItem)
					? this.setBtnState(arrowPrev)
					: this.setBtnState(arrowPrev, false);
				this.isElementInViewport(lastItem)
					? this.setBtnState(arrowNext)
					: this.setBtnState(arrowNext, false);
			}, 1100);
		},
		isElementInViewport: function(el) {
			const rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
					(window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			);
		},
		// SET STATE OF PREV/NEXT ARROWS
		setBtnState: function(el, flag = true) {
			const disabledClass = 'disabled';
			if (flag) {
				el.classList.add(disabledClass);
			} else {
				if (el.classList.contains(disabledClass)) {
					el.classList.remove(disabledClass);
				}
				el.disabled = false;
			}
		},
	},
};
</script>

<style scoped>
/* intro styling */
.intro .flex-container {
	display: flex;
	padding: 20px;
	max-width: 715px;
	margin: 0 auto;
	align-items: center;
	flex-direction: column;
}
@media (min-width: 768px) {
	.intro .flex-container {
		flex-direction: row;
	}
}
.intro .image {
	margin: 0 20px 20px 0;
	width: 150px;
	height: 150px;
	background-image: url('../assets/profile_image.jpg');
	background-size: cover;
	background-repeat: no-repeat;
}
.intro img {
	width: 150px;
	border-radius: 70px;
}
.intro .text {
	font-weight: lighter;
	padding: 20px;
	line-height: 1.3;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.15);
	max-width: 500px;
}

/* timeline styling */
.timeline {
	white-space: nowrap;
	overflow-x: hidden;
}

.timeline ol {
	font-size: 0;
	width: 100vw;
	padding: 250px 0;
	transition: all 1s;
}

.timeline ol li {
	position: relative;
	display: inline-block;
	list-style-type: none;
	width: 160px;
	height: 3px;
	background: #aaa;
}

.timeline ol li:last-child {
	width: 280px;
}

.timeline ol li:not(:first-child) {
	margin-left: 14px;
}

.timeline ol li:not(:last-child)::after {
	content: '';
	position: absolute;
	top: 50%;
	left: calc(100% + 1px);
	bottom: 0;
	width: 12px;
	height: 12px;
	transform: translateY(-50%);
	border-radius: 50%;
	background: #f45b69;
}

.timeline ol li div {
	position: absolute;
	left: calc(100% + 7px);
	width: 280px;
	padding: 15px;
	font-size: 1rem;
	font-weight: lighter;
	white-space: normal;
	color: black;
	background: white;
	line-height: 1.3;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.15);
}

.timeline ol li div::before {
	content: '';
	position: absolute;
	top: 100%;
	left: 0;
	width: 0;
	height: 0;
	border-style: solid;
}

.timeline ol li div time {
	display: block;
	font-weight: bold;
	color: #555;
	margin-bottom: 7px;
}

.timeline ol li:nth-child(odd) div {
	top: -16px;
	transform: translateY(-100%);
}

.timeline ol li:nth-child(odd) div::before {
	top: 100%;
	border-width: 8px 8px 0 0;
	border-color: white transparent transparent transparent;
}

.timeline ol li:nth-child(even) div {
	top: calc(100% + 16px);
}

.timeline ol li:nth-child(even) div::before {
	top: -8px;
	border-width: 8px 0 0 8px;
	border-color: transparent transparent transparent white;
}

.timeline .arrows {
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
}

.timeline .arrows .arrow__prev {
	margin-right: 20px;
}

.timeline .disabled {
	opacity: 0.5;
}

.timeline .arrows img {
	width: 45px;
	height: 45px;
}
</style>
