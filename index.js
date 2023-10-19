// const express = require('express')
// const cors = require('cors');
// const app = express()
// app.use(express.json())
// app.use(cors()); 
// const port = 6000

// const serviceList = [
//   {
//     id:1, name:"service1"
//   },
//   {
//     id:2, name:"service2"
//   },
//   {
//     id:3, name:"service3"
//   },
//   {
//     id:4, name:"service4"
//   }
// ]


// const bookingList = [
//   {
//   id:1, bookName:"booking1"
// },
// {
//   id:2, bookName:"booking2"
// },
// {
//   id:3, bookName:"booking3"
// },
// {
//   id:4, bookName:"booking4"
// },
// {
//   id:5, bookName:"booking5"
// },
// ]

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/api/services', (req, res) => {
//   res.status(200).send(serviceList)

// })


// app.get('/api/services/:id', (req, res) => {
  

//  const filteredSer=  serviceList.find((each) => each.id === parseInt(req.params.id))
//  if (!filteredSer) res.status(404).send("Service is not Found")
//  res.status(200).send(filteredSer)

// })

// app.post('/api/bookings', (req, res) => {
//   // if (!req.body.name  || req.body.name.length < 3){
//   //   res.status(404).send("book is required")

//   //   return;
//   // }
  
  

//   const book = {
//     id: bookingList.length + 1,
//     bookName: req.body.name
//   }



//   bookingList.push(book)
//   res.status(201).send(book)

// })


// app.get('/api/allbookings', (req, res) => {


  


//   res.status(200).send(bookingList)

// })




// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors(`*`));
const port = 6000;

const serviceList = [
  {
    id: 1,
    name: "service1"
  },
  {
    id: 2,
    name: "service2"
  },
  {
    id: 3,
    name: "service3"
  },
  {
    id: 4,
    name: "service4"
  }
];

const bookingList = [
  {
    id: 1,
    bookName: "booking1"
  },
  {
    id: 2,
    bookName: "booking2"
  },
  {
    id: 3,
    bookName: "booking3"
  },
  {
    id: 4,
    bookName: "booking4"
  },
  {
    id: 5,
    bookName: "booking5"
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/services', (req, res) => {
 
  res.status(200).send(serviceList);
  console.log("services", serviceList)
});

app.get('/api/services/:id', (req, res) => {
  try {
    const filteredSer = serviceList.find((each) => each.id === parseInt(req.params.id));
    if (!filteredSer) {
      res.status(404).send("Service is not found");
    } else {
      res.status(200).send(filteredSer);
    }
  } catch (error) {
    res.status(500).send("An error occurred while processing the request");
  }
});

app.post('/api/bookings', (req, res) => {
  try {
    // Validate the request body
    if (!req.body.name || req.body.name.length < 3) {
      res.status(400).send("Book name is required and must be at least 3 characters long");
    } else {
      const book = {
        id: bookingList.length + 1,
        bookName: req.body.name
      };
      bookingList.push(book);
      res.status(201).send(book);
    }
  } catch (error) {
    res.status(500).send("An error occurred while processing the request");
  }
});

app.get('/api/allbookings', (req, res) => {
  try {
    res.status(200).send(bookingList);
  } catch (error) {
    res.status(500).send("An error occurred while processing the request");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
