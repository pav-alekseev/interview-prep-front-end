/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @param {{user?: number, minDuration?: number, equipment?: Array<string>, merge?: boolean}} [options]
 * @return {Array}
 */
export default function selectData(sessions, options) {
  if (!options) {
    return sessions;
  }

  const data = options.merge ? merge(sessions) : sessions;

  const result = [];

  for (let i = 0; i < data.length; i++) {
    const session = data[i];

    if (
      (options.user && session.user !== options.user) ||
      (options.minDuration && session.duration < options.minDuration) ||
      (options.equipment &&
        session.equipment.every(
          (session) => !options.equipment.includes(session),
        ))
    ) {
      continue;
    }

    result.push(session);
  }

  return result;
}

const merge = (sessions) => {
  const mergedSessions = new Map();
  const reversedSessions = [...sessions].reverse();
  const processedSessions = [];

  for (let i = 0; i < reversedSessions.length; i++) {
    const session = reversedSessions[i];

    if (!mergedSessions.has(session.user)) {
      const clonedSession = {
        ...session,
        equipment: new Set(session.equipment),
      };

      mergedSessions.set(session.user, clonedSession);
      processedSessions.push(clonedSession);

      continue;
    }

    mergedSessions.get(session.user).duration += session.duration;
    mergedSessions.get(session.user).equipment = new Set([
      ...mergedSessions.get(session.user).equipment,
      ...session.equipment,
    ]);
  }

  return processedSessions
    .map((session) => ({
      ...session,
      equipment: [...session.equipment].sort(),
    }))
    .reverse();
};
