1. Run `npm run build` to trigger a PROD build, a bundle analyze report will be auto generated
2. From the client bundle report `/.next/analyze/client.html`, observe that the entire `@radix-ui/theme` is being bundled, despite only several components are used.
3. Navigate to `src/app/page.tsx`
4. Comment/remove the usage of `Popover`
5. Repeat step 1 - 2 again
6. Observe that only necessary components are being bundled this time.
