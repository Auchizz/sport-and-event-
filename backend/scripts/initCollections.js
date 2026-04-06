require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');

const Club = require('../models/Club');
const Facility = require('../models/Facility');
const Inquiry = require('../models/Inquiry');
const Match = require('../models/Match');
const Player = require('../models/Player');
const Sport = require('../models/Sport');
const User = require('../models/User');

async function initCollections() {
  await connectDB();

  // Create collections explicitly so they exist even before the first insert.
  const models = [
    User,
    Sport,
    Club,
    Player,
    Match,
    Facility,
    Inquiry
  ];

  for (const model of models) {
    await model.createCollection();
  }

  console.log('Collections created or already exist.');
  await mongoose.connection.close();
}

if (require.main === module) {
  initCollections().catch((error) => {
    console.error('Init collections failed:', error.message);
    process.exit(1);
  });
}

module.exports = initCollections;
