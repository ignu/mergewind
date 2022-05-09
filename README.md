# MergeWind

> :warning: **This is pre-alpha**. About 5% of cases are covered and performance is probably less than great.

When extracting components with Tailwind, we often want to provide defaults and a way to override those defaults.

Override gets complicated, not only are `p-4` and `p-12` different classes, `w-max` and `w-full` are in direct competition.

Our desired outcome is.

```javascript
    const defaults = "w-full p-4 text-green-500 opacity-50"
    mergeWind(defaults, "text-blue-500 p-8"))  // "w-full opacity-50 text-blue-500 p-8"
```
