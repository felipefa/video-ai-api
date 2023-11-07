import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.prompt.deleteMany();

  await prisma.prompt.create({
    data: {
      title: 'YouTube Title',
      template: `Your task is to generate three titles for a YouTube video.

Below, you will receive a transcription of this video. Please use this transcription to create the titles.

Additionally, you will also receive a list of titles. Use this list as a reference for the titles to be generated.

The titles should have a maximum of 60 characters and be eye-catching and appealing to maximize clicks.

Return ONLY the three titles in list format as shown below:
'''
Title 1
Title 2
Title 3
'''

Transcription:
'''
{transcription}
'''`.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: 'YouTube Description',
      template:
        `Your task is to generate a concise description for a YouTube video.

Below, you will receive a transcription of this video. Please use this transcription to create the description.

The description should be in the first person and contain the main points of the video. It should be no longer than 80 words.

Use captivating words to engage and grab the reader's attention.

Additionally, at the end of the description, include a list of 3 to 10 lowercase hashtags containing keywords related to the video.

The return should follow the following format:
'''
Description.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcription:
'''
{transcription}
'''`.trim(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
