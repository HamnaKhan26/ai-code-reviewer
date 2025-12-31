import express from 'express';
import {reviewCode} from '../services/openai.js';
import {buildPrompt} from '../prompts/codeReviewPrompt.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const {diff, language} = req.body;

    if (!diff || !language) {
        return res.status(400).json({error: 'Missing diff or language in request body'});
    }

    try {
        const prompt = buildPrompt(diff, language);
        const review = await reviewCode(prompt);
        res.json({review});
    } catch (error) {
        console.error('Error generating code review:', error);
        res.status(500).json({error: 'Failed to generate code review'});
    }
});

export default router;
