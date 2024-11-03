import { scoreQuiz } from "./script.js";
import { scoreHangman } from "./hangman.js";
import { scoreDnd } from "./dragDrop.js";


const totalScore = scoreDnd + scoreQuiz + scoreHangman;

console.log(totalScore);