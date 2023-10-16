/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-new */
import assert from "node:assert";

import { Given, Then, When } from "@cucumber/cucumber";

import { EmptyArgumentError } from "../../../src/core/domain/base/error/EmptyArgumentError";
import { Channel } from "../../../src/core/domain/entities/Channel";
import { ChannelType } from "../../../src/core/domain/entities/enum/ChannelType";

let channelName: string;
let channelType: ChannelType;
let channel: Channel;

Given("I am a system user", async () => {
  // not needed
});

When(
  "I fill the name field with {string} and the type as {int}",
  async (string: string, int: number) => {
    channelName = string;
    channelType = int;
  }
);

When("Receive the filled data on screen", async () => {
  assert.equal(channelName, "Channel 1");
  assert.equal(channelType, ChannelType.VIDEO);
});

Then("Register a new video channel", async () => {
  channel = new Channel({
    name: channelName,
    type: channelType,
  });
});

Then(
  "The channel {string} is showed on the registered channels list",
  async (string: string) => {
    assert.equal(channel.name, string);
  }
);

When("I fill the name field with empty name", async () => {
  channelName = "";
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Then("Receive the error message {string}", async (string) => {
  assert.throws(() => {
    new Channel({
      name: channelName,
      type: channelType,
    });
  }, EmptyArgumentError);
});
