# Song List (Web Application)
API for managing data for the song-list-web application.
This application was originally created to manage a collection of songs sung at a small group so the musician(s) can see the chords and others can see the lyrics for the songs.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
The following software needs to be installed:
* [git](https://git-scm.com/downloads) - for managing the repositories
* [Node.js](https://nodejs.org/) - for managing packages used by the web application
* [Visual Studio 2017](https://www.visualstudio.com/vs/community/) - for building the API project

### Installing

#### Visual Studio Solution Setup
This is the front-end of two projects which work together. It may is convenient to place both of these proejcts into the same solution.

If using Visual Studio, create a new Project:
* Click "File" > "New" > "Project..."
* Search for and select Blank Solution as the type.
* Enter an appropriate name for the solution (such as "SongList").
* Enter the location where the new directory will be created for the solution.
* Check "Create directory for solution".
* Uncheck "Create new Git repository".
* Click "OK"

#### Download the repositories
Next we will pull the API and web application repositories.

```
cd <path>/SongList
git clone https://github.com/sumtech/song-list-api.git SongList.Api
git clone https://github.com/sumtech/song-list-web.git SongList.Web
```

#### Visual Studio Projects
Add the API project to the solution.
* Open the solution created earlier in Visual Studio.
* In the Solution Explorer, right-click on the solution.
* Click "Add" > "Existing Project..."

Add the web application project to the solution using the same process.

Setup the startup projects:
* In the solution Explorer, right-click on the solution.
* Click "Set StartUp Projects..."
* Select "Multiple startup projects"
* Fro SongList.Api and SongList.Web, select "Start"
* Click "OK"

#### Initial Build
Build the project using "Build" > "Build Solution"

Launch the project using "Debug" > "Start without Debugging" or using Ctrl+F5. This will cause two tabs to open up in your browser: one for the API and one for the application.

## Running the tests

[ Explain how to run the automated tests for this system ]

### Break down into end to end tests

[ Explain what these tests test and why ]

```
Give an example
```

### And coding style tests

[ Explain what these tests test and why ]

```
Give an example
```

## Deployment

[ Add additional notes about how to deploy this on a live system ]

## Built With

* [Angular](https://github.com/angular/angular) - The web framework
* [Bootstrap](https://github.com/twbs/bootstrap) - The style framework
* [.NET Core](https://github.com/dotnet/core) - The API framework

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sumtech/song-list-web/tags).

This project is still in an alpha (or pre-alpha) state, so we have not officially started using versioning or creating releases.

## Authors

* **Brian Dorgan, Jr.** - *Initial work* - [SumTech](https://github.com/SumTech)

See also the list of [contributors](https://github.com/sumtech/song-list-web/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

[ Who should I acknowledge ]
