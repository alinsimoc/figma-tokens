/* eslint-disable no-param-reassign */
import { ShadowTokenSingleValue } from '@/types/propertyTypes';
import { SingleTokenObject } from '@/types/tokens';
import { convertBoxShadowTypeToFigma } from './figmaTransforms/boxShadow';
import { convertToFigmaColor } from './figmaTransforms/colors';
import convertOffsetToFigma from './figmaTransforms/offset';

export default function setEffectValuesOnTarget(
  target,
  token: SingleTokenObject | { value: ShadowTokenSingleValue[] | ShadowTokenSingleValue },
  key = 'effects',
) {
  try {
    const { description, value } = token;

    if (Array.isArray(value)) {
      target[key] = value.map((v) => {
        const { color, opacity: a } = convertToFigmaColor(v.color);
        const { r, g, b } = color;
        return {
          color: {
            r,
            g,
            b,
            a,
          },
          type: convertBoxShadowTypeToFigma(v.type),
          spread: v.spread,
          radius: v.blur,
          offset: convertOffsetToFigma(Number(v.x), Number(v.y)),
          blendMode: v.blendMode || 'NORMAL',
          visible: true,
        };
      });
    } else {
      const tokenValue = token.value as ShadowTokenSingleValue;
      const { color, opacity: a } = convertToFigmaColor(tokenValue.color);
      const { r, g, b } = color;
      target[key] = [
        {
          color: {
            r,
            g,
            b,
            a,
          },
          type: convertBoxShadowTypeToFigma(tokenValue.type),
          spread: tokenValue.spread,
          radius: tokenValue.blur,
          offset: convertOffsetToFigma(Number(tokenValue.x), Number(tokenValue.y)),
          blendMode: tokenValue.blendMode || 'NORMAL',
          visible: true,
        },
      ];
    }

    if (description) {
      target.description = description;
    }
  } catch (e) {
    console.error('Error setting color', e);
  }
}
