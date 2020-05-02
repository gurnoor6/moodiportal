export interface rulesDescription{
	id:number;
	rulesandregulations:string;
	prizes:string;
	coverimg:string;
	coverimgmobile;

}

let coverimage="assets/midocs/coverimgrules.png";
let coverimgmobile="assets/midocs/coverimgrulesmobile.png";
let ruleshere="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.). It may also include a limited number of characters that control simple arrangement of text, such as spaces, line breaks, or tabulation characters (although tab characters can  many different things, so are hardly ). Plain text is different from formatted text, where style information is included; from structured text, where structural parts of the document such as paragraphs, sections, and the like are identified; and from binary files in which some portions must be interpreted as binary objects (encoded integers, real numbers, images, etc.).";
let prizeshere="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.). It may also include a limited number of characters that control simple arrangement of text, such as spaces, line breaks, or tabulation characters (although tab characters can  many different things, so are hardly). Plain text is different from formatted text, where style information is included; from structured text, where structural parts of the document such as paragraphs, sections, and the like are identified; and from binary files in which some portions must be interpreted as binary objects (encoded integers, real numbers, images, etc.).";


export const rulesList:rulesDescription[]=[
{id:1,rulesandregulations:ruleshere,prizes:prizeshere,coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:2,rulesandregulations:ruleshere,prizes:prizeshere,coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:3,rulesandregulations:ruleshere,prizes:prizeshere,coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:4,rulesandregulations:ruleshere,prizes:prizeshere,coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:5,rulesandregulations:ruleshere,prizes:prizeshere,coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:6,rulesandregulations:ruleshere,prizes:prizeshere,coverimg:coverimage,coverimgmobile:coverimgmobile},
]