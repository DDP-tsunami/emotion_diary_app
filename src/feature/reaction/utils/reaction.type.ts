export enum ReactionType {
  CONSOLATION = 'consolations',
  CONGRATULATION = 'congratulations',
  CHEERING = 'cheering',
  SYMPATHY = 'sympathy',
  ANGRY = 'angry',
}

export const reactionMapper = {
  [ReactionType.CONSOLATION]: '😥',
  [ReactionType.CONGRATULATION]: '🥳',
  [ReactionType.CHEERING]: '😉',
  [ReactionType.SYMPATHY]: '😌',
  [ReactionType.ANGRY]: '🤬',
};

export const reactionTypeArray: ReactionType[] = [
  ReactionType.CONGRATULATION,
  ReactionType.CONSOLATION,
  ReactionType.CHEERING,
  ReactionType.SYMPATHY,
  ReactionType.ANGRY,
];
