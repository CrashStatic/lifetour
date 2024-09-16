// vite.config.js
import { ViteImageOptimizer } from "file:///C:/Users/Crashstatic/Desktop/%D0%9A%D0%B8%D1%82%D1%82%D0%B8/%D0%90%D0%BA%D1%81%D0%B5%D0%BB%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F/lifetour/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import VitePluginSvgSpritemap from "file:///C:/Users/Crashstatic/Desktop/%D0%9A%D0%B8%D1%82%D1%82%D0%B8/%D0%90%D0%BA%D1%81%D0%B5%D0%BB%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F/lifetour/node_modules/@spiriit/vite-plugin-svg-spritemap/dist/index.js";
var vite_config_default = {
  plugins: [
    VitePluginSvgSpritemap("source/img/sprite/*.svg", {
      output: "dist/sprite.svg",
      styles: false,
      injectSVGOnDev: true
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    // ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false
                },
                removeViewBox: false,
                // https://github.com/svg/svgo/issues/1128
                cleanupIds: false
              }
            }
          },
          "removeDimensions"
        ]
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: "./.cache"
    })
  ],
  css: {
    devSourcemap: true
  },
  publicDir: "public",
  root: "./source",
  build: {
    outDir: "../dist"
  },
  base: "./lifetour/",
  server: {
    port: 3e3
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDcmFzaHN0YXRpY1xcXFxEZXNrdG9wXFxcXFx1MDQxQVx1MDQzOFx1MDQ0Mlx1MDQ0Mlx1MDQzOFxcXFxcdTA0MTBcdTA0M0FcdTA0NDFcdTA0MzVcdTA0M0JcdTA0MzVcdTA0NDBcdTA0MzBcdTA0NDZcdTA0MzhcdTA0NEZcXFxcbGlmZXRvdXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXENyYXNoc3RhdGljXFxcXERlc2t0b3BcXFxcXHUwNDFBXHUwNDM4XHUwNDQyXHUwNDQyXHUwNDM4XFxcXFx1MDQxMFx1MDQzQVx1MDQ0MVx1MDQzNVx1MDQzQlx1MDQzNVx1MDQ0MFx1MDQzMFx1MDQ0Nlx1MDQzOFx1MDQ0RlxcXFxsaWZldG91clxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQ3Jhc2hzdGF0aWMvRGVza3RvcC8lRDAlOUElRDAlQjglRDElODIlRDElODIlRDAlQjgvJUQwJTkwJUQwJUJBJUQxJTgxJUQwJUI1JUQwJUJCJUQwJUI1JUQxJTgwJUQwJUIwJUQxJTg2JUQwJUI4JUQxJThGL2xpZmV0b3VyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcbmltcG9ydCBWaXRlUGx1Z2luU3ZnU3ByaXRlbWFwIGZyb20gJ0BzcGlyaWl0L3ZpdGUtcGx1Z2luLXN2Zy1zcHJpdGVtYXAnO1xuLy8gaW1wb3J0IHsgVml0ZU1pbmlmeVBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1pbmlmeSc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGx1Z2luczogW1xuICAgIFZpdGVQbHVnaW5TdmdTcHJpdGVtYXAoJ3NvdXJjZS9pbWcvc3ByaXRlLyouc3ZnJywge1xuICAgICAgb3V0cHV0OiAnZGlzdC9zcHJpdGUuc3ZnJyxcbiAgICAgIHN0eWxlczogZmFsc2UsXG4gICAgICBpbmplY3RTVkdPbkRldjogdHJ1ZSxcbiAgICB9KSxcbiAgICAvLyBpbnB1dCBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9odG1sLW1pbmlmaWVyLXRlcnNlciBvcHRpb25zXG4gICAgLy8gVml0ZU1pbmlmeVBsdWdpbih7fSksXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcbiAgICAgIHRlc3Q6IC9cXC4oanBlP2d8cG5nfHN2ZykkL2ksXG4gICAgICBpbmNsdWRlUHVibGljOiBmYWxzZSxcbiAgICAgIGxvZ1N0YXRzOiB0cnVlLFxuICAgICAgYW5zaUNvbG9yczogdHJ1ZSxcbiAgICAgIHN2Zzoge1xuICAgICAgICBtdWx0aXBhc3M6IHRydWUsXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncHJlc2V0LWRlZmF1bHQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICAgICAgICAgIGNsZWFudXBOdW1lcmljVmFsdWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb252ZXJ0UGF0aERhdGE6IHtcbiAgICAgICAgICAgICAgICAgIGZsb2F0UHJlY2lzaW9uOiAyLFxuICAgICAgICAgICAgICAgICAgZm9yY2VBYnNvbHV0ZVBhdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgdXRpbGl6ZUFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZVZpZXdCb3g6IGZhbHNlLCAvLyBodHRwczovL2dpdGh1Yi5jb20vc3ZnL3N2Z28vaXNzdWVzLzExMjhcbiAgICAgICAgICAgICAgICBjbGVhbnVwSWRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAncmVtb3ZlRGltZW5zaW9ucycsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgcG5nOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNwbmdcbiAgICAgICAgcXVhbGl0eTogODAsXG4gICAgICAgIHBhbGV0dGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBqcGVnOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNqcGVnXG4gICAgICAgIHF1YWxpdHk6IDgwLFxuICAgICAgICBwcm9ncmVzc2l2ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGpwZzoge1xuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjanBlZ1xuICAgICAgICBxdWFsaXR5OiA4MCxcbiAgICAgICAgcHJvZ3Jlc3NpdmU6IHRydWVcbiAgICAgIH0sXG4gICAgICAvLyBDYWNoZSBhc3NldHMgaW4gY2FjaGVMb2NhdGlvbi4gV2hlbiBlbmFibGVkLCByZWFkcyBhbmQgd3JpdGVzIGFzc2V0IGZpbGVzIHdpdGggdGhlaXIgaGFzaCBzdWZmaXggZnJvbSB0aGUgc3BlY2lmaWVkIHBhdGguXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIGNhY2hlTG9jYXRpb246ICcuLy5jYWNoZScsXG4gICAgfSksXG4gIF0sXG4gIGNzczoge1xuICAgIGRldlNvdXJjZW1hcDogdHJ1ZVxuICB9LFxuICBwdWJsaWNEaXI6ICdwdWJsaWMnLFxuICByb290OiAnLi9zb3VyY2UnLFxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4uL2Rpc3QnLFxuICB9LFxuICBiYXNlOiAnLi9saWZldG91ci8nLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxYixTQUFTLDBCQUEwQjtBQUN4ZCxPQUFPLDRCQUE0QjtBQUluQyxJQUFPLHNCQUFRO0FBQUEsRUFDYixTQUFTO0FBQUEsSUFDUCx1QkFBdUIsMkJBQTJCO0FBQUEsTUFDaEQsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsZ0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUFBO0FBQUE7QUFBQSxJQUdELG1CQUFtQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLEtBQUs7QUFBQSxRQUNILFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsY0FDTixXQUFXO0FBQUEsZ0JBQ1Qsc0JBQXNCO0FBQUEsZ0JBQ3RCLGlCQUFpQjtBQUFBLGtCQUNmLGdCQUFnQjtBQUFBLGtCQUNoQixtQkFBbUI7QUFBQSxrQkFDbkIsaUJBQWlCO0FBQUEsZ0JBQ25CO0FBQUEsZ0JBQ0EsZUFBZTtBQUFBO0FBQUEsZ0JBQ2YsWUFBWTtBQUFBLGNBQ2Q7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBO0FBQUEsUUFFSCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsTUFBTTtBQUFBO0FBQUEsUUFFSixTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0EsS0FBSztBQUFBO0FBQUEsUUFFSCxTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsTUFDZjtBQUFBO0FBQUEsTUFFQSxPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsSUFDakIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
