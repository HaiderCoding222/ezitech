const cardsData = [
    {
      image: './images/annie.jpeg',
      name: 'John Doe',
      icon: 'fa fa-heart',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
      image: './images/iqra.jpeg',
      name: 'Jane Doe',
      icon: 'fa fa-star',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        image: './images/nageen.jpeg',
        name: 'Jane Doe',
        icon: 'fa fa-star',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        image: './images/khalid.jpeg',
        name: 'Jane Doe',
        icon: 'fa fa-star',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        image: './images/mari lak.jpeg',
        name: 'Jane Doe',
        icon: 'fa fa-star',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        image: './images/mavar.jpeg',
        name: 'Jane Doe',
        icon: 'fa fa-star',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        image: './images/boonga minhas.jpeg',
        name: 'Jane Doe',
        icon: 'fa fa-star',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        image: './images/sakesar bar.jpeg',
        name: 'Jane Doe',
        icon: 'fa fa-star',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        image: './images/sana javed.jpeg',
        name: 'Jane Doe',
        icon: 'fa fa-star',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        image: './images/pat cummins.jpeg',
        name: 'Jane Doe',
        icon: 'fa fa-star',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.'
    },
  ];

  // Function to generate and display the cards
function generateCards() {
    const cardContainer = document.querySelector('.card-container');
    cardsData.forEach((cardData, index) => {
      const cardHTML = `
        <div class="card" style="left: ${index * 250}px;">
          <div class="card-header">
            <img src="${cardData.image}" alt="Image" class="card-image">
            <span class="card-name">${cardData.name}</span>
            <i class="${cardData.icon}" aria-hidden="true"></i>
          </div>
          <div class="card-paragraph">${cardData.paragraph}</div>
        </div>
      `;
      cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
  }

  // Function to animate the cards
function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const cardLeft = parseInt(card.style.left);
      card.style.left = `${cardLeft - 2}px`;
      if (cardLeft < -250) {
        card.style.left = '100%';
      }
    });
    requestAnimationFrame(animateCards);
  }
  
  // Call the functions to generate and animate the cards
  generateCards();
  animateCards();
  
  