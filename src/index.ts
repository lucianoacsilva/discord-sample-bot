import { Client, Partials } from "discord.js";
import { config } from "dotenv";

config();

const { BOT_TOKEN } = process.env;

const client: Client = new Client({ 
  intents: ["Guilds", "GuildMessages", "DirectMessages"] , 
  partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.Reaction, Partials.User] 
});

client.on("ready", (client) => {
  console.log("Bot online! " + client.user.tag);
});

client.login(BOT_TOKEN);