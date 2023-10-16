Feature: Manage Comunication Channels
    As system user
    I want to manage the communication channels specifing the audio or video type

  Scenario: Register a new channel of video or audio
    Given I am a system user
    When I fill the name field with "Channel 1" and the type as 1
    And Receive the filled data on screen
    Then Register a new video channel
    And The channel "Channel 1" is showed on the registered channels list

  Scenario: Register a new channel with empty name
    Given I am a system user
    When I fill the name field with empty name
    Then Receive the error message "Argument name is empty"
