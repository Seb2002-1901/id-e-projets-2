/** La courbe d'envie : monte (0-90 s), culmine (90-240 s), redescend. Reduce Motion → progression statique. */
import React, { useEffect, useState } from 'react';
import { AccessibilityInfo, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const W = 320, H = 140;
function curveY(p: number): number { // p ∈ [0,1] — position sur la vague
  if (p < 0.25) return H - 20 - (p / 0.25) * 90;           // montée
  if (p < 0.55) return H - 110 + Math.sin((p - 0.25) * 20) * 4; // plateau vibrant
  return H - 110 + ((p - 0.55) / 0.45) * 90;                // décrue
}
const PATH = (() => {
  let d = `M 0 ${curveY(0)}`;
  for (let i = 1; i <= 60; i++) d += ` L ${(i / 60) * W} ${curveY(i / 60)}`;
  return d;
})();
const TOTAL_S = 600; // la vague affichée court sur 10 min

export function CourbeEnvie({ elapsedS }: { elapsedS: number }) {
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => { void AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion); }, []);
  const p = Math.min(1, elapsedS / TOTAL_S);
  const cx = p * W, cy = curveY(p);
  const phase = p < 0.25 ? 'Elle monte — c’est normal.' : p < 0.55 ? 'Elle culmine. Tiens la vague.' : 'Elle redescend. Tu l’as presque traversée.';
  return (
    <View accessibilityLabel={`Courbe de l’envie : ${phase}`} style={{ alignItems: 'center' }}>
      <Svg width={W} height={H}>
        <Path d={PATH} stroke="#F08A63" strokeWidth={3} fill="none" opacity={0.9} />
        {!reduceMotion && <Circle cx={cx} cy={cy} r={9} fill="#F2EDE6" />}
      </Svg>
      <Text style={{ color: '#B9C0CC', fontSize: 16, marginTop: 8, textAlign: 'center' }}>{phase}</Text>
    </View>
  );
}
