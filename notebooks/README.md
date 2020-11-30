# Jupyter/Colab notebooks for ImJoy

If you want to run the Jupyter notebooks locally, please install the ImJoy-Engine (a wrapper to Jupyter notebooks) via `pip install imjoy`.

## Getting started with imjoy-jupyter-extension
This part gives you a brief impression about what tools are available in imjoy, that could ease your image analysis pipeline development.
- You can try the demo here: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/imjoy-team/imjoy-binder-image/master?filepath=imjoy-jupyter-tutorial.ipynb)
- Run [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/imjoy-jupyter-tutorial.ipynb)  

If you want more instructions, find more info [here](https://github.com/imjoy-team/imjoy-jupyter-extension).


## Notebooks for image visualization

 - Kaibu is a web application for visualizing and annotating multi-dimensional images, built with [OpenLayers](https://openlayers.org/) and [itk-vtk-viewer](https://kitware.github.io/itk-vtk-viewer/). You will be able to customize your own image viewer and/or annotatation tool, including 3D images. You can find more project details [here](https://github.com/imjoy-team/kaibu). Run [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/Kaibu-jupyter-tutorial.ipynb).
 - Vizarr is a WebGL-based multi-resolution zarr image visualization tool (based on another project named [Viv](https://github.com/hms-dbmi/viv), [vizarr repo](https://github.com/hms-dbmi/vizarr)): [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/hms-dbmi/vizarr/master?filepath=example%2Fgetting_started.ipynb)
[![launch ImJoy](https://imjoy.io/static/badge/launch-imjoy-badge.svg)](https://imjoy.io/#/app?workspace=vizarr&plugin=https://github.com/hms-dbmi/vizarr/blob/master/example/VizarrDemo.imjoy.html)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/hms-dbmi/vizarr/blob/master/example/mandelbrot.ipynb)
[viv notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/vitessce-image-viewer-imjoy.ipynb)

 - Compare images with a custom plugin built with ITK/VTK Viewer: [google colab notebook](https://colab.research.google.com/drive/1w3OvjhPGm7rNtWYcSe4nZjkG_9CCMeBS?usp=sharing), [Jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/CompareImagesDemo.ipynb).


## Microscopy control with Micro-Manager
In this part, we will go through the steps for using ImJoy plugins with MicroManager to control your microscope interactively. The easiest way is to try it on [MyBinder](https://mybinder.org/v2/gh/imjoy-team/micro-manager-imjoy/master?filepath=Micro-Manager-ImJoy-Tutorial.ipynb).

If you want to run locally, you will need to:
  * If you don't have Micro-Manager installed, download the lastest version of micro-manager 2.0
  * Run Micro-Manager, select tools-options, and check the box that says Run server on port 4827 (you only need to do this once)
  * Set the path to your micromanager installation folder and a config file. Follow the instruction in the [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/Micro-Manager-ImJoy-Tutorial.ipynb).


## Develop web GUI plugins in a notebook
[This jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/Tutorial-for-ImJoy-plugin-development.ipynb) shows how you can develop web plugins with HTML/CSS/Javascript and works with Python plugins.
You can also try it in [google colab notebook](https://colab.research.google.com/drive/17eQfwRGRxi8BREGnbh7rb2jIr4Lu02CX?usp=sharing)


## ImJoy Interactive Segmentation
This is a demo project using Imjoy to train deep learning models interactively (while doing annotation) for segmentation. You can go to [this repo](https://github.com/imjoy-team/imjoy-interactive-segmentation) to check more into details.

  - You can run in [google colab](https://colab.research.google.com/github/imjoy-team/imjoy-interactive-segmentation/blob/master/Tutorial.ipynb) (same colab link as in the original repo).
  - You can run locally by following the [installation](https://github.com/imjoy-team/imjoy-interactive-segmentation#installation) and then in Jupyter Notebook in the "ImJoy Interactive ML" environment.
  - You can also in run [MyBinder](https://mybinder.org/v2/gh/imjoy-team/imjoy-interactive-segmentation/master?filepath=Tutorial.ipynb)
