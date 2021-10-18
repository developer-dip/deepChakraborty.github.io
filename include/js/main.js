//sticky navbar--------------------

window.addEventListener("scroll", function(){
	var header = document.querySelector(".header");
	header.classList.toggle("sticky", window.scrollY > 0);
});



// cursor---------------------------------
let mouseCursor = document.querySelector('#cursor');
let navlink = document.querySelectorAll('a.off,button.off');

window.addEventListener('mousemove', cursor);

function cursor(e){
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
};

navlink.forEach(link =>{
	link.addEventListener("mouseleave", () =>{
		mouseCursor.classList.remove("link-grow");
		link.classList.remove('hoverd-link');
	});
	link.addEventListener("mouseover", () =>{
		mouseCursor.classList.add("link-grow");
		link.classList.add('hoverd-link');
	});
});

//-----------------------------------
	$(document).ready(function() {
		$(".filter-button").click(function(){
			var value = $(this).attr('data-filter');

			if(value =="all"){
				$('.filter').show('1000');
		
			}
		else
		{
			$(".filter").not('.'+value).hide('3000');
			$(".filter").filter('.'+value).show('3000');
		}
		});
			if($(".filter-button").removeClass("active")){
				$(this).removeClass("active");
			}
			$(this).addClass("active");
	});