const winston = require('winston');
const { IncomingWebhook } = require('@slack/webhook');
const dotenv = require('dotenv');

dotenv.config();

const webhookUrl = process.env.SLACK_WEBHOOK_URL;

const slackTransport = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (webhookUrl) {
  const slackHook = new IncomingWebhook(webhookUrl);

  slackTransport.add(new winston.transports.Stream({
    stream: {
      write: (message) => {
        slackHook.send({
          text: message,
        });
      },
    },
    level: 'info',
  }));
}

module.exports = slackTransport;
