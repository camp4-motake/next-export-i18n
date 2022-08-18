import { ImgHTMLAttributes } from 'react';

interface SourceAttr {
  srcSet?: string;
  media?: string;
  type?: string;
}

interface ImgAttr extends ImgHTMLAttributes<HTMLImageElement> {
  srcSet?: string;
  source?: [SourceAttr?, SourceAttr?, SourceAttr?, SourceAttr?];
}

export const ImageWebp = (props: ImgAttr) => {
  const { source, ...imgProps } = props;
  return (
    <picture>
      <source
        srcSet={replaceExt(props.srcSet || props.src || '')}
        type="image/webp"
      />
      <source srcSet={props.srcSet || props.src} />
      <img alt="" decoding="async" {...imgProps} />
    </picture>
  );
};

function replaceExt(path: string, ext = '.webp') {
  return path?.replace(/\.[^.]+$/, ext);
}

// const sourceTags = props.source?.length
//   ? props.source?.map(
//       (src, index): SourceAttr => (
//         <>
//           <source
//             srcSet={replaceExt(props.srcSet || '')}
//             type={src?.type || 'image/webp'}
//             {...(src?.media ? { media: src?.media } : {})}
//           />
//           <source srcSet={props.srcSet} />
//         </>
//       )
//     )
//   : null;
// const sourceWebp =
//   props.srcSet || props.src ? (
//     <>
//       <source
//         srcSet={replaceExt(props.srcSet || props.src || '')}
//         type="image/webp"
//       />
//       <source srcSet={props.srcSet || props.src} />
//     </>
//   ) : null;
