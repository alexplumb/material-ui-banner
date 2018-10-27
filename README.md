# material-ui-banner
Bringing the Material Design banner component to the material-ui library. Spec here: https://material.io/design/components/banners.html

## Installation

```shell-script
npm install material-ui-banner --save
```

## Usage
### To embed a banner anywhere on the page
```jsx
<Banner
  icon={<div />}
  label="Text goes here"
  open
/>
```
### To add a static banner to the top of the page
```jsx
<AppBar>
  <Toolbar />
</AppBar>

<StaticBanner />
```

You would then open the banner elsewhere in the app like so:
```
StaticBanner.show({
  icon: <div />,
  label: 'This is an example of a static banner with one line of text.',
});
```

## Options

These options are compatible with both `<Banner>` and `StaticBanner.show()`

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
    <th> Default </th>
  </tr>
  <tr>
    <td> open </td>
    <td> boolean </td>
    <td> (required) Indicates whether or not the banner is displayed </td>
    <td> false </td>
  </tr>
  <tr>
    <td> label </td>
    <td> string </td>
    <td> (required) Text label that appears on the banner </td>
    <td> '' </td>
  </tr>
  <tr>
    <td> icon </td>
    <td> element </td>
    <td> Material icon to be displayed on the left side of the banner </td>
    <td> null </td>
  </tr>
  <tr>
    <td> showDismissButton </td>
    <td> boolean </td>
    <td> Whether or not to display the default "Dismiss" button </td>
    <td> true </td>
  </tr>
  <tr>
    <td> dismissButtonLabel </td>
    <td> string </td>
    <td> Text label for the default "Dismiss" button </td>
    <td> 'Dismiss' </td>
  </tr>
  <tr>
    <td> onClose </td>
    <td> function </td>
    <td> Callback invoked when clicking the Dismiss button. StaticBanner passes a close handler automatically </td>
    <td> null </td>
  </tr>
  <tr>
    <td> buttonLabel </td>
    <td> string </td>
    <td> If provided, add a second button (or only button, if the dismiss button is hidden) </td>
    <td> null </td>
  </tr>
  <tr>
    <td> buttonOnClick </td>
    <td> function </td>
    <td> Click event handler for the custom second button </td>
    <td> null </td>
  </tr>
  <tr>
    <td> appBar </td>
    <td> boolean </td>
    <td> Set to true if the banner should appear at the very top of the page beneath the AppBar component </td>
    <td> false </td>
  </tr>
</table>

## License
Uses the [MIT License](https://opensource.org/licenses/MIT)
