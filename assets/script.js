let nft = [
  {
    name: 'Equilibrium #3429',
    image: 'url(images/image-equilibrium.jpg)',
    description: 'Our Equilibrium collection promotes balance and calm.',
    price: '0.041 ETH',
    days: '3 days left',
    nameCreator: 'Jules Wyvern',
    imageCreator: 'url(images/image-avatar.png)',
  },
  {
    name: 'Bored Ape #8',
    image: 'url(images/ape.png)',
    description: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs',
    price: '111.714 ETH',
    days: '5 days left',
    nameCreator: 'Inan Brunelli',
    imageCreator: 'url(images/inan.jpg)',
  },
  {
    name: 'Crypto Punk #998',
    image: 'url(images/punk.png)',
    description: 'Crypto Punk is nonsense and has no purpose',
    price: '75.23 ETH',
    days: '1 days left',
    nameCreator: 'Will Smith',
    imageCreator: 'url(images/user_punk.png)',
  },
]
let nftNum = 0;
let $card = document.querySelector('.card').style;
document.getElementById('btn').addEventListener('click', () => {
  nftNum = nftNum == nft.length - 1 ? 0 : nftNum + 1;
  changeCard(nftNum);
});


inputValues(0);
function changeCard(cod) {
  $card.animation = 'animacaoCard 1.5s infinite alternate';
  setTimeout(() => {
    inputValues(cod);
  }, 1500);

  setTimeout(() => {
    $card.animation = '';
  }, 3000);
}

function inputValues(cod) {
  $('.main-text').html(nft[cod].name);
  $('.img').css('background-image', nft[cod].image);
  $('.descript').html(nft[cod].description);
  $('.price').html(nft[cod].price);
  $('.days').html(nft[cod].days);
  $('.nameCreator').html(nft[cod].nameCreator);
  $('.user-image').css('background-image', nft[cod].imageCreator);
}