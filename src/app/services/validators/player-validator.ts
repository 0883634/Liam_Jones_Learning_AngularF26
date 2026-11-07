export function playerValidator(form: any) {
  const localPlayers = form.value.localPlayers;
  const onlinePlayers = form.value.onlinePlayers;

  if (onlinePlayers > 0 && onlinePlayers <= localPlayers) {
    return { playerRatio: true };
  }

  return null;
}
