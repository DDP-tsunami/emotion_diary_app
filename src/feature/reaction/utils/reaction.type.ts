export enum ReactionType {
  CONSOLATION = 'consolations',
  CONGRATULATION = 'congratulations',
  CHEERING = 'cheering',
  SYMPATHY = 'sympathy',
  ANGRY = 'angry',
}

const congratulationReaction = require('@res/image/reaction_congratulations.png');
const consolationReaction = require('@res/image/reaction_consolations.png');
const cheeringReaction = require('@res/image/reaction_cheering.png');
const sympathyReaction = require('@res/image/reaction_sympathy.png');
const angryReaction = require('@res/image/reaction_sympathy.png');

export const reactionMapper = {
  [ReactionType.CONGRATULATION]: congratulationReaction,
  [ReactionType.CONSOLATION]: consolationReaction,
  [ReactionType.CHEERING]: cheeringReaction,
  [ReactionType.SYMPATHY]: sympathyReaction,
  [ReactionType.ANGRY]: angryReaction,
};

export const reactionTypeArray: ReactionType[] = [
  ReactionType.CONGRATULATION,
  ReactionType.CONSOLATION,
  ReactionType.CHEERING,
  ReactionType.SYMPATHY,
  ReactionType.ANGRY,
];
