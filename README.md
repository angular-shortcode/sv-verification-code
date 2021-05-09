<p align="center">
  <img style="text-align: center" src="https://angular-shortcode.web.app/assets/icons/logo-128.png"/>
  <h1 align="center">Angular Shortcode</h1>
</p>

![](https://img.shields.io/github/stars/pandao/editor.md.svg)


#SvVerificationCode

## Table of Contents

- [Live Demo](#demo) 
  
- [Installation](#installation)
- [Options](#options)
- [Usage](#usage)
- [Example](#example)
- [Author](#author)
- [Contact](#conatact)
  
  [comment]: <> (  | [Stackblitz]&#40;#demo&#41;)


<a name="demo"/>

##Demo
***

✨ [Angular Shortcode](https://angular-shortcode.web.app/home/verification) ✨

[comment]: <> (✨ [Stackblitz]&#40;https://stackblitz.com/edit/svstarrating?file=src/app/app.component.ts&#41; ✨)


<a name="installation"/>

##Installation
***
Install with NPM

```bash
npm i sv-verification-code
```


<a name="options"/>

##Options
***

| Name                  | Type            | Default Value  |Description |
| --------------------- |:---------------:|:--------------:|------------|
| required              | boolean         | true           |
| digitOnly             | boolean         | true           |
| autofocus             | boolean         | true           |
| numberOfDigit         | number          | 5              |
| @Output() enter       | number          |                |
| @Output() verifyText  | number          |                |


<a name="usage"/>

##Usage
***

Import SvVerificationCodeModule in your app

```typescript
import { SvVerificationCodeModule } from 'sv-verification-code';

@NgModule({
  imports: [
    ...
      SvVerificationCodeModule
  ],
  ...
})
export class AppModule { }
```

<a name="example"/>

##Example
***
```html
<sv-verification-code
  [required]="true"
  [digitOnly]="true"
  [autofocus]="true"
  [numberOfDigit]="5"
  (enter)="verifyText($event)"
  (verifyText)="verifyText($event)">
</sv-verification-code>
```

```javascript
verifyText(event): void {
  console.log('output result', event);
}
```

<a name="auther"/>

##Author
***
`Mehdi Sadeghian` `Samira Vahidi`


<a name="conatact"/>

##Contact
***
`github`
- [Angular Shortcode](https://github.com/angular-shorcode/)
- [Mehdi Sadeghian](https://github.com/sadeghianme)
- [Samira Vahidi](https://github.com/svahidi)

`linedIn`
- [Mehdi Sadeghian](https://linkedin.com/in/mehdi-sadeghian-864912a5)
- [Samira Vahidi](https://www.linkedin.com/in/samira-vahidi-2368856b)

`twitter`
