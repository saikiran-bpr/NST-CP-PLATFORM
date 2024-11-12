const { default: axios } = require("axios");
const RAPID_API_KEY = process.env.RAPID_API_KEY;
const headers = {
    headers: {
        'x-rapidapi-key': RAPID_API_KEY,
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

const runCode = async (req, res) => {
    const { source_code, language_id, stdin } = req.body;
    const base64EncodedSource = Buffer.from(source_code).toString('base64');
    const base64EncodedStdin = Buffer.from(stdin).toString('base64');
    const body = {
        source_code : base64EncodedSource,
        language_id : Number(language_id),
        stdin : base64EncodedStdin
    }
    const response = await axios.post('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*',
        body,
        headers
    );
    res.status(201).send(response.data);
}

const getSubmission = async (req, res) => {
    const token = req.params.token;
    const response = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`, headers);
    response.data.source_code = Buffer.from(response.data.source_code, 'base64').toString()
    response.data.stdout = Buffer.from(response.data.stdout, 'base64').toString()
    res.status(200).send(response.data);
}


module.exports = { runCode, getSubmission };