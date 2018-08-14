
exports.seed = async function(knex) {
  await knex.raw('ALTER SEQUENCE events2_id_seq RESTART with 11');
  await knex('events2').del();
      return knex('events2').insert([
        {
          id: 1, 
          title: "Wedding",
          description: "Wedding is a ceremony where two people are united in marriage",
          date: '2018-08-17T13:45:18.000Z',
          location: "Paris",
        },
        {
          id: 2, 
          title: "Baby shower",
          description: "A baby shower is a way to celebrate the expected or delivered birth of a child by presenting gifts to the mother at a party, whereas other cultures host a baby shower to celebrate the transformation of a woman into a mother",
          date: "02/10/2004",
          location: "Philly",
        },
        {
          id: 3, 
          title: "Thanksgiving",
          description: "Thanksgiving Day is a national holiday celebrated in Canada, the United States,",
          date: "05/10/2018",
          location: "NYC",
        },
        {
          id: 4, 
          title: "Happy New Year ",
          description: "New Year is the time or day at which a new calendar year begins and the calendar's year count increments by one.",
          date: "12/31/2018",
          location: "USA",
        },
        {
          id: 5, 
          title: "Christmas",
          description: "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world.",
          date: "12/24/2017",
          location: "Miami",
        },
        {
          id: 6, 
          title: "Easter",
          description: "Easter, also called Pascha , is a festival and holiday celebrating the resurrection of Jesus from the dead, described in the New Testament as having occurred on the third day",
          date: "03/21/2018",
          location: "DC",
        },
        {
          id: 7, 
          title: "Halloween",
          description: "The word Halloween literally means the evening before All Hallows Day or All Saint’s Day, celebrated on November 1.",
          date: "10/31/2018",
          location: "Boston",
        },
        {
          id: 8, 
          title: "Independence day",
          description: "Independence Day (colloquial: the Fourth of July; July Fourth; the Fourth) is a federal holiday in the United States commemorating the adoption of the Declaration of Independence on July 4, 1776",
          date: "07/04/1976",
          location: "Philadelphia",
        },
        {
          id: 9, 
          title: "Capstones",
          description: "Join us Wednesday, September 12th from 4:00pm to 7:00pm as we showcase capstone projects from graduates of BOTH our Web Development & Data Science programs.",
          date: "09/12/2018",
          location: "NYC SoHo",
        },
        {
          id: 10, 
          title: "My birthday",
          description: "No more words just go to celebrate it",
          date: "05/26/2019",
          location: "NYC",
        },
     ]);
};
