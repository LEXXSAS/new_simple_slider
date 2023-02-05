let counter = 0;
window.addEventListener('click', () => {
    let containerSlidePage = document.querySelector('.container');
    let firstSlide = containerSlidePage.querySelector('.slide');

    if(containerSlidePage.contains(firstSlide)) {
        firstSlide.remove()
    } 
});
window.addEventListener('click', () => {
    function count() {
        counter++;
        return counter;
    }
    count();
    let containerSlidePage = document.querySelector('.container');
    let firstSlide = containerSlidePage.querySelector('.slide');
    if (counter == 2) {
        counter = 0;
        let containerSlidePage = document.querySelector('.container');
        let allSlides = `            <div class="slide">
        <div class="picture__wrap">
        <picture>
        <source srcset="img/01nature_extra_small.jpg" media="(max-width: 378px)">
        <img src="img/01nature_extra_small.jpg"
        alt="nature" 
        srcset="img/01nature_small.jpg 500w,
                img/01nature_medium.jpg 1000w,
                img/01nature_big.jpg 1500w"
                >
        </picture>
        </div>
        <div class="nature__text">
        <h2>It's Nature</h2><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam accusamus, corrupti iusto quasi eum vero autem distinctio! Et commodi debitis natus vel fugiat minima deleniti ullam, at perspiciatis cumque.
        Quaerat quia explicabo tenetur! Est quisquam voluptatem cupiditate unde laudantium adipisci consectetur? Iste, labore harum. Voluptates accusamus cupiditate eos, ipsa iusto minima soluta, totam alias quasi vel distinctio doloribus consequuntur!
        Tenetur in qui praesentium numquam ratione amet voluptatibus? Cumque possimus ea cum, dolorum fuga quam in, error nihil consequatur aut facilis consequuntur. Quis sint architecto sapiente rerum culpa doloremque praesentium.
        Iste suscipit debitis quis porro error, tempora accusamus. Quaerat, neque? Quisquam distinctio iste nesciunt nemo! Obcaecati, assumenda perferendis suscipit consectetur nesciunt minus quibusdam ipsa aperiam laborum, quisquam nemo voluptatum rem?
        Iusto, repudiandae ullam? Quae qui assumenda quod quam quas labore eveniet exercitationem pariatur nihil. Ipsa qui, sapiente eligendi asperiores eos esse? Ut, officiis totam error eum architecto velit voluptas maxime?</p>
        </div>
    </div>
    <div class="slide">
        <div class="picture__wrap">
        <picture>
        <source srcset="img/02nature_extra_small.jpg" media="(max-width: 378px)">
        <img src="img/02nature_extra_small.jpg"
        alt="nature" 
        srcset="img/02nature_small.jpg 500w,
                img/02nature_medium.jpg 1000w,
                img/02nature_big.jpg 1500w"
                >
        </picture>
        </div>
        <div class="nature__text flower">
        <h2>It's Flowers</h2><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae sunt, obcaecati laborum vitae minus cumque temporibus sint distinctio repellat consectetur quaerat sequi quasi quod totam dolore ipsa debitis! Iusto.
        Labore magni, magnam numquam, dicta recusandae ipsa consectetur vel officia facilis vitae odit quidem esse minima quis blanditiis nam quasi corrupti facere, rem neque quae. Iure facere eius cumque. Assumenda.
        Amet repellendus incidunt illo voluptatibus. Quibusdam, quaerat, non perferendis ad nisi at recusandae rerum inventore laudantium facilis dolore sequi quia vero nam sunt nemo deleniti totam. Optio culpa delectus dolor.
        Repellendus voluptates est, veritatis saepe error odio voluptate reprehenderit autem, id, tenetur inventore! Numquam deserunt voluptatibus vitae excepturi ullam totam ab alias sit! Iste libero animi dignissimos. Odio, ab sed.
        At incidunt deserunt asperiores, sapiente inventore doloribus repellat facilis doloremque cum earum. Perspiciatis est dicta at quia, illo vitae quaerat sunt veniam, eaque unde dolor beatae ullam qui ipsam voluptas.</p>
        </div>
    </div`;
        containerSlidePage.insertAdjacentHTML('afterbegin', allSlides)
    }
});
