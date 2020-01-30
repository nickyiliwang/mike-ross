FLOW:
Greeted by : Search Page
On input submit: go to Results/ Catalogue/ all results Page/ (Loading skeleton, carouse ...)
Onclick to a single page (single page with copying and change fonts)

TODO:
Dynamic scale input field
deal with docs without passages/carousel, maybe give a button to go
Loading skeleton
Doc list css
Sorting List by date and Alpha
no match css
display setting css
single page css
maybe use sass?
responsive

# ROSS Mini Interview Question

## Requirements

Create an application where users can enter keywords and search for documents.

The user must be able to do the following:

- Enter a query up to a maximum of 200 characters

  - Input field must dynamically grow and shrink

- Switch between two types of search: `keyword` and `citation`

- View results and navigate through detected passages for each decision

  - Sort Results alphabetically by title or by most recent

- Open a document and view all of its passages.

  - User can navigate between results from the document view
  - User can configure font and font size of document
  - User can copy the citation of the decision

- Application is responsive
  - Smallest device (320x568) iPhone 5/SE in Chrome DevTools
- Performance considerations are taken into account

### Sample Queries

1. type: `keyword` text: `good faith`
2. type: `keyword` text: `air conditioner pipes containing residual refrigerants`
3. type: `keyword` text: `unlawful compensation black-jack game beat-the-dealer`
4. type: `keyword` text: `debt plaintiff`
5. type: `citation` text: `43 Cal.4th 56`
6. type: `citation` text: `474 So.2d 224`
7. type: `citation` text: `So.`
8. type: `citation` text: `So.2d`
