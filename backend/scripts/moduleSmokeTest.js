const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/User');
const Sport = require('../models/Sport');
const Club = require('../models/Club');
const Match = require('../models/Match');
const Player = require('../models/Player');
const Facility = require('../models/Facility');
const Inquiry = require('../models/Inquiry');
const { startServer } = require('../server');

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });

  const rawBody = await response.text();
  const body = rawBody ? JSON.parse(rawBody) : null;

  if (!response.ok) {
    throw new Error(`${options.method || 'GET'} ${url} failed with ${response.status}: ${rawBody}`);
  }

  return body;
}

async function expectStatus(url, expectedStatus, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });

  const rawBody = await response.text();
  if (response.status !== expectedStatus) {
    throw new Error(`${options.method || 'GET'} ${url} returned ${response.status}, expected ${expectedStatus}: ${rawBody}`);
  }

  return rawBody ? JSON.parse(rawBody) : null;
}

async function createTempUser({ name, email, password, role, studentId, faculty }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({
    name,
    email,
    password: hashedPassword,
    role,
    studentId,
    faculty
  });
}

async function run() {
  const port = Number(process.env.PORT || 5004);
  const baseUrl = `http://127.0.0.1:${port}`;
  const stamp = Date.now();
  const adminEmail = `module-admin-${stamp}@example.com`;
  const memberEmail = `module-member-${stamp}@example.com`;
  const password = 'TempPass123!';

  const createdIds = {
    users: [],
    sports: [],
    clubs: [],
    matches: [],
    players: [],
    facilities: [],
    inquiries: []
  };

  let server;

  try {
    server = await startServer(port);

    const adminUser = await createTempUser({
      name: 'Module Admin',
      email: adminEmail,
      password,
      role: 'admin',
      studentId: `ADMIN-${stamp}`,
      faculty: 'QA'
    });
    createdIds.users.push(adminUser._id);

    const memberUser = await createTempUser({
      name: 'Module Member',
      email: memberEmail,
      password,
      role: 'student',
      studentId: `USER-${stamp}`,
      faculty: 'QA'
    });
    createdIds.users.push(memberUser._id);

    const adminLogin = await requestJson(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email: adminEmail, password })
    });
    const adminToken = adminLogin.data.token;

    const memberLogin = await requestJson(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email: memberEmail, password })
    });
    const memberToken = memberLogin.data.token;

    await requestJson(`${baseUrl}/api/module/overview`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });

    const sport = await requestJson(`${baseUrl}/api/module/sports`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({
        name: `Test Sport ${stamp}`,
        icon: 'TS',
        team: `Test Team ${stamp}`,
        description: 'Temporary test sport record',
        captain: { name: 'Captain One', email: `captain-${stamp}@example.com`, phone: '0700000001' },
        viceCaptain: { name: 'Vice Captain One', email: `vice-${stamp}@example.com`, phone: '0700000002' },
        secretary: { name: 'Secretary One', email: `secretary-${stamp}@example.com`, phone: '0700000003' },
        president: { name: 'President One', email: `president-${stamp}@example.com`, phone: '0700000004' }
      })
    });
    createdIds.sports.push(sport.data._id);

    await requestJson(`${baseUrl}/api/module/sports/${sport.data._id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({
        ...sport.data,
        description: 'Updated temporary test sport record'
      })
    });

    const club = await requestJson(`${baseUrl}/api/module/clubs`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({
        name: `Test Club ${stamp}`,
        icon: 'TC',
        description: 'Temporary test club record',
        president: { name: 'Club President', email: `club-president-${stamp}@example.com`, phone: '0700000011' },
        secretary: { name: 'Club Secretary', email: `club-secretary-${stamp}@example.com`, phone: '0700000012' }
      })
    });
    createdIds.clubs.push(club.data._id);

    const match = await requestJson(`${baseUrl}/api/module/matches`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({
        sport: `Test Sport ${stamp}`,
        homeTeam: 'Home QA',
        awayTeam: 'Away QA',
        score: '1-0',
        status: 'live',
        liveNote: '12 min',
        date: '2026-03-26',
        time: '09:00 AM',
        venue: 'Test Arena'
      })
    });
    createdIds.matches.push(match.data._id);

    const player = await requestJson(`${baseUrl}/api/module/players`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({
        name: 'Test Player',
        sport: `Test Sport ${stamp}`,
        role: 'Captain',
        email: `player-${stamp}@example.com`,
        phone: '0700000020',
        batch: 'QA'
      })
    });
    createdIds.players.push(player.data._id);

    const facility = await requestJson(`${baseUrl}/api/module/facilities`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({
        facility: `Facility ${stamp}`,
        description: 'Temporary facility record',
        slots: [
          { time: '08:00 - 10:00', status: 'Open' },
          { time: '10:00 - 12:00', status: 'Limited' }
        ]
      })
    });
    createdIds.facilities.push(facility.data._id);

    const inquiry = await requestJson(`${baseUrl}/api/module/inquiries`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${memberToken}` },
      body: JSON.stringify({
        recipientName: 'Captain One',
        recipientRole: 'Captain',
        sportOrClubName: `Test Sport ${stamp}`,
        entityType: 'team',
        fullName: 'Module Member',
        studentId: `USER-${stamp}`,
        email: memberEmail,
        message: 'Testing inquiry submission'
      })
    });
    createdIds.inquiries.push(inquiry.data._id);

    await requestJson(`${baseUrl}/api/module/sports`, {
      headers: { Authorization: `Bearer ${memberToken}` }
    });

    await expectStatus(`${baseUrl}/api/module/sports`, 403, {
      method: 'POST',
      headers: { Authorization: `Bearer ${memberToken}` },
      body: JSON.stringify({
        name: 'Forbidden Write',
        icon: 'FW',
        team: 'Forbidden Team',
        description: 'Should not be created',
        captain: { name: 'No Access', email: 'no-access@example.com', phone: '0700000030' },
        viceCaptain: { name: 'No Access', email: 'no-access-2@example.com', phone: '0700000031' },
        secretary: { name: 'No Access', email: 'no-access-3@example.com', phone: '0700000032' },
        president: { name: 'No Access', email: 'no-access-4@example.com', phone: '0700000033' }
      })
    });

    const finalOverview = await requestJson(`${baseUrl}/api/module/overview`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });

    console.log('Module smoke test passed.');
    console.log(JSON.stringify({
      overview: finalOverview.data,
      created: {
        sport: sport.data.name,
        club: club.data.name,
        match: `${match.data.homeTeam} vs ${match.data.awayTeam}`,
        player: player.data.name,
        facility: facility.data.facility,
        inquiry: inquiry.data.recipientRole
      }
    }, null, 2));
  } finally {
    await Inquiry.deleteMany({ _id: { $in: createdIds.inquiries } });
    await Facility.deleteMany({ _id: { $in: createdIds.facilities } });
    await Player.deleteMany({ _id: { $in: createdIds.players } });
    await Match.deleteMany({ _id: { $in: createdIds.matches } });
    await Club.deleteMany({ _id: { $in: createdIds.clubs } });
    await Sport.deleteMany({ _id: { $in: createdIds.sports } });
    await User.deleteMany({ _id: { $in: createdIds.users } });

    if (server && server.listening) {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (!error || error.code === 'ERR_SERVER_NOT_RUNNING') {
            resolve();
            return;
          }

          reject(error);
        });
      });
    }

    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  }
}

run().catch((error) => {
  console.error('Module smoke test failed.');
  console.error(error);
  process.exit(1);
});
