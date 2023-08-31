const Voter = require("../models/Voter");


exports.getAllVoters = async (req, res) => {
  try {
    // Retrieve all voters from the database
    const voters = await Voter.find();
    res.json(voters);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.addVoter = async (req, res) => {
  try {
    // Add a new voter
    const newVoter = new Voter({
      name: req.body.name,
      boothNumber: req.body.boothNumber,
      // Other voter details
    });

    await newVoter.save();

    res.json(newVoter);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteVoter = async (req, res) => {
  try {
    // Delete a voter by ID
    await Voter.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Voter deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
