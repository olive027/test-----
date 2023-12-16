
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
	gsap.utils.toArray('.about__text-p').forEach((t) => {

		gsap.fromTo(t,{
			yPercent: 100,
			// autoAlpha: 0,
		},{
			yPercent: -100,
			// autoAlpha: 1,
			// ease: "none",
			scrollTrigger: {
				trigger: t,
				start: "top 70%",
				end: "bottom top",
				scrub: 2,
			}
		});
		gsap.fromTo(t,{
			autoAlpha: 0,
		},{
			autoAlpha: 1,
			// ease: "none",
			scrollTrigger: {
				trigger: t,
				start: "top 70%",
				end: "bottom 60%",
				scrub: 2,
			}
		});
	});

});
