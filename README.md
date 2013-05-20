# Shortly

Shortly is a serverless pastebin service. Everything happens on the client side, and the data is stored in the URL.

## How it works

Data is compressed using the deflate algorithm, then base64 encoded to ensure it can be stored safely in a URL. It is then set as the `window.location.hash` of the current page.

You can view an example [here](http://lucaspiller.github.com/shortly/#fVVhb9s2EP3eX3HQJxtwVNtxtjTAMBTd2hpI2yBxPgyBUdDSySJKkSpJ2fG/391Rkj1smD9JIvn47t175+t8mS/gE1r0ysDTyUb1+uYNADw/rgNoC583mwcolIUdgsfWY0AbseQltQvOdBGhcr4B52ndqKgPCNFBcA0yzg/rjnRYBWRIeFkstjMosUVbaruHrnUWYo1QOIJ9jeAqftUeuoA5bGglHh0D8SUBlEcodVWhJxpaMZPdSQAqVUR6UPHMS2pQ5qhOgejvtWWco441KAhFjQ2CVQ3zN8YdE5QiJsbZHD5SQSVW2mopSVsmQOURX2eTQvcQRDBQtoSAjSJKRZjRI0L2bLXo8ojBdb5AWJdMudLoA0yI2vSOUUR6XfTSC9LTiJTB48cPsLx+9wu8rJZbmBxrXdTcB6MKDLwaGGTx6/Ut7djKcT6yuJ3fitZT1lAHCC0WdHeRClCla2Ng2fj0UKWzgeXPiNuVR5G4wGwG2SAoLfDr0Ob+tXU+ZjMGymoX6JH3f29VrPvNwzOTy1QXa+d1PGVQeddIx/jsPwjmYkFuvtiv9S46aguUjoq2LoLUT4Dcr9ZrAgSjG032SW4yaPfUZlcxjmIj5CSrP7D2X56fNuxmtTPi1Jp48VOdHEoKMK4f2kbfT0KQj6cinj5/e77/4z8wxHAE0Nmd62xJjuqJ6GrEoWIOukT49OfmimNR9s4W6xauMyXsJY5k4NBRtxk0h/eJgGeI/n6PsfMWVosVTB7xZ4chXnEFG+fg3tn9FEJUsQt8u2gAZATy9j6h0IVJrAQsIe/rmLCDAxZilsU8X+WLm2lqCv2+uoh3o5yu29eRNSA5CuqudnSjovrjRcwJhu9PaoQehzZRsJY3N5S7iJSbHRIADQqeHeBMyaSMptTwcCHdXk/9Sd20htJLiUmubTRzEGN416I3J5KuZWNygWHwQ6ASrmngLaGOseUAjz7L+Es2TAXSqePOUFXGFdwJizSG/I/RFgEOWol67NC+r2LSIXC9ehIuDEloQb8arH4xPZLB+tizIUaGIcnOr9954vyWqN5lkL19mwEnDl4go3cpd0svQ/z4++8ZkDH8CbZbwVmLEdNeYolNG0+sLmu3p0zbWVq7nfOyCqFrsExzeOQnmfKYHMtoephs5Tk2YrVCBnS/q7eZ0SGiJVP0Qx02Hx54+tskWEgRpjPCQ/4O6IXrTOFjqAu3Dyj8+fLyUYTJ0ImbfJEvp6kWdhlBrx9oFJZ0LKBUpa1Ifhnwg9Oc42NNmWT6rQtB74aMyKx9N5/Dy3LFs3ZdpWTh+X7dT6z0z8lXpElzPwOaV8MwEu1Jb+pqJpcxjniQvqnLgqVada71X/WtKxmKfVo8FkjYDCJekT+89DfSM1NQdYYS87NTJjWxdI0inryVSTLMl/d/sVT0FoZlCgdXckalcvrbyksWI4U0i//3MvGmHBJhvn7bQEEzaY/jVQzCe/O/AQ==2) and another [here](http://lucaspiller.github.com/shortly/#81TPVUhUyMksKclJVShJTSzIL1EozsgvKlFIzEtRKC7ILy3RAwA=2). Oh and another [here](http://lucaspiller.github.com/shortly/#lZO9bsQwCIB3PwXq4kQKeG90b2IJtkpdOnS18uwF/zTnixNdQHIIkM+AHYB/YWZXTUIv+hCPZC5eyNPj8VBTV7UXywyqQPoV1RUiRFfcMMEPzHXNAbgh7D4hJLM8ekXrai8pwvo+ZOLZJUgStfrazgdq5cGr931MSC7n9w1oi3coIa6F0mFsTubl6491ABUSKiRTijfEAvEgEelMg0Buf1EGNIhSJuY5MwTbVCTCiUqrfa9DbSQi1E4EF96955TG2BF6yFgOuJtqutCa4Y5nkOAuI3IYMHbvFYMQ9dqvDg7S+CXjipEsHAaINquScKE540D4/vrV24/2a+Y4+jMVRMvoAPrPmPhtW1sJB5nYNMv8CniK2RUbA+pWeSfZti2OpvAcHwO6vUaILuEP2).

Different browsers have different limits of the total URL length, however around 2000 characters seems to be the recommended safe maximum. At the moment there is currently nothing to enforce the limit, however a checksum is added to check that we get all the data.

You may be thinking that these really long urls are an issue, but that isn't the case. Testing [bit.ly](http://bit.ly/) and [t.co](http://t.co/) with these urls worked without issues. You could even chain them together in order to deal with longer data...

## Attribution

This uses the following libraries:

* [jQuery](http://jquery.com/)
* [js-base64](https://github.com/dankogai/js-base64)
* [js-deflate](https://github.com/dankogai/js-deflate)

## Get Involved

Fork, commit, send pull request, drink beer.

## Press

* [Shortly: a Serverless Pastebin Service - All Data is Stored in the URL](https://news.ycombinator.com/item?id=5696127) (2013)
* [Show HN: Shortly, a serverless pastebin](https://news.ycombinator.com/item?id=3834643) (2012)

## License

Remake by hmsintrepide

<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">shortly</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/lucaspiller/shortly" property="cc:attributionName" rel="cc:attributionURL">Luca Spiller</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/lucaspiller/shortly" rel="dct:source">github.com</a>.<br />Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/lucaspiller/shortly" rel="cc:morePermissions">https://github.com/lucaspiller/shortly</a>.