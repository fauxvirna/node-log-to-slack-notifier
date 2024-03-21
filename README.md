# Slack Logger Module

This module provides a logging solution that integrates with Winston for local logging and Slack for real-time alerts. It is designed to facilitate easy monitoring and alerting for Node.js applications.

## Features

- **Local Logging**: Logs info, error, and combined logs to local files.
- **Slack Alerts**: Sends log messages to a configured Slack channel for real-time alerting.
- **Flexible Configuration**: Uses environment variables for easy configuration without modifying code.

## Prerequisites

To use this module, you need:

- Node.js installed on your system.
- A Slack workspace and the ability to create Incoming Webhooks.

## Installation

1. **Clone the repository** or copy the provided code into a new file in your project.
2. **Install dependencies** by running `npm install winston @slack/webhook dotenv`.

## Configuration

1. **Set up an Incoming Webhook in Slack**:
    - Go to your Slack App settings.
    - Navigate to "Incoming Webhooks", and create a new webhook. Copy the webhook URL.
2. **Configure environment variables**:
    - Create a `.env` file in the root of your project.
    - Add `SLACK_WEBHOOK_URL=your_webhook_url_here` with the URL you obtained from Slack.

## Usage

1. **Import the logger** into your Node.js application:

```javascript
const logger = require('./path_to_logger');
```

2. **Log messages** using the following methods:

```javascript
logger.info('Informational message');
logger.error('Error message');
```

- Info level messages will be logged to both the console and the `logs/combined.log` file.
- Error level messages will be logged to the console, `logs/error.log`, and `logs/combined.log` file.
- If the Slack webhook URL is configured, info and error level messages will also be sent to the Slack channel.

## Logging Levels

This module uses Winston's default logging levels:
- `error`: 0
- `warn`: 1
- `info`: 2
- `http`: 3
- `verbose`: 4
- `debug`: 5
- `silly`: 6

## File Structure

- `logs/`: Directory for log files.
    - `error.log`: Logs all error level messages.
    - `combined.log`: Logs all messages.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

## License

[MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.
