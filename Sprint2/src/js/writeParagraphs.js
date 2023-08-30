document.addEventListener('DOMContentLoaded', function() {
    const aboutUsContent = document.getElementById('aboutUs-content');

    // Tu objeto JSON con los párrafos
    const aboutUsData = {
        "aboutUs": {
            "paragraphs": [
                "Welcome to Canine Care Connect where tail-wagging happiness meets exceptional care! As devoted pet lovers ourselves, we're committed to offering a pawsitively delightful experience for pet parents seeking premium care for their cherished pups right here in Gran Canaria.",
                "Our mission? To bridge the gap between pet parents and the finest canine accommodations across the island. We know how daunting it can be to find the pawfect place for your fur babies while you're away, and that's where we come in. By collaborating with a network of esteemed dog boarding facilities, we provide an all-encompassing solution that fulfills both your needs and your pets' desires.",
                "At Canine Care Connect, we deeply treasure the bond between humans and their canine companions. Our dedicated team ensures that your furry pals receive unmatched attention, safety, and a home-away-from-home experience. With a keen focus on comfort, security, and tailor-made services, we're dedicated to ensuring your pets' stay is as delightful as possible.",
                "Join us in crafting a joyful and worry-free journey for you and your cherished pets. Let's embark on this adventure of trust, compassion, and wagging tails together!"
            ]
        }
    };

    // Itera a través de los párrafos y crea elementos <p> en el contenido
    aboutUsData.aboutUs.paragraphs.forEach(paragraph => {
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = paragraph;
        aboutUsContent.appendChild(paragraphElement);
    });
});