const constants = {
  API_URL: 'https://api.yelp.com/v3/businesses',
  IMAGES_BASE_URL: 'https://www.dietdoctor.com/',
  GENERAL_ERROR_MESSAGE: 'Something went wrong',
  INTRO_SLIDERS: [
    {
      key: 'one',
      title: 'About me!',
      text:
        'Hi there!,I am  Luis, a father, Developer, musician and christian guy that tries to balance all that falls into that bag , does it sound familiar? As a developer I have more than 15 years of experience working mobile and other technologies, Techonology changes so fast that you have to learn every day a little bit.',
      image: require('../app/assets/images/juggling.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'About this app',
      text:
        'This is a simple app that I build during some spare time. Besides references of apps I can provide, it is nice to have a tiny that uses thing you like. Here you will find simple examples of flows that are used every day in most commercial applications',
      image: require('../app/assets/images/mobileConcept.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require('../app/assets/images/rocket-guy.png'),
      backgroundColor: '#22bcb5',
    },
  ],
  MENU_ACTIONS: [
    {
      text: 'Business Search',
      icon: require('../app/assets/images/search.png'),
      name: 'bt_search',
      position: 1,
    },
    {
      text: 'Notes',
      icon: require('../app/assets/images/notes.png'),
      name: 'bt_notes',
      position: 2,
    },
  ],
};

export default constants;
